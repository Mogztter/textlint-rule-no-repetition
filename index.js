const StringSource = require('textlint-util-to-string').StringSource

const defaultOptions = {
  ignore: []
}

function reporter (context, options = {}) {
  const opts = Object.assign({}, defaultOptions, options)
  const { Syntax, RuleError, report, fixer } = context
  return {
    [Syntax.Paragraph] (node) {
      return new Promise(resolve => {
        const source = new StringSource(node)
        const text = source.toString()
        const repeatedWordsRegExp = /\b(\w+)\s+\1\b/g
        let match
        while ((match = repeatedWordsRegExp.exec(text))) {
          const index = match.index
          const [matched, matchedWord] = match
          if (opts.ignore.includes(matchedWord)) {
            continue
          }
          const range = [index, index + matched.length]
          const fix = fixer.replaceTextRange(range, matchedWord)
          const message = `“${matchedWord}” is repeated`
          report(node, new RuleError(message, { index, fix }))
        }
        resolve()
      })
    }
  }
}

module.exports = {
  linter: reporter,
  fixer: reporter
}
