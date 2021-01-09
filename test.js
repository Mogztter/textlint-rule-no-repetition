const TextLintTester = require('textlint-tester')
const rule = require('./index.js')

const tester = new TextLintTester()

tester.run(
  'textlint-rule-no-repetition',
  {
    rules: [
      {
        ruleId: 'no-repetition',
        rule,
        options: {
          ignore: ['really']
        }
      }
    ]
  },
  {
    valid: [
      {
        text: 'foo and bar'
      },
      {
        text: 'this is really really great'
      }
    ],
    invalid: [
      {
        text: 'foo and and bar',
        output: 'foo and bar',
        errors: [
          {
            message: '“and” is repeated'
          }
        ]
      }
    ]
  }
)

tester.run('textlint-rule-no-repetition', rule, {
  valid: [
    {
      text: 'foo and bar'
    },
    {
      text: 'this is really good'
    },
    {
      text: 'this is foofoo'
    },
    {
      text: 'this and that and this'
    }
  ],
  invalid: [
    {
      text: 'foo and and bar',
      output: 'foo and bar',
      errors: [
        {
          message: '“and” is repeated'
        }
      ]
    },
    {
      text: 'this is really really good',
      output: 'this is really good',
      errors: [
        {
          message: '“really” is repeated'
        }
      ]
    }
  ]
})
