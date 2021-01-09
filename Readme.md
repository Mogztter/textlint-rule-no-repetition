# textlint-rule-no-repetition

[![textlint fixable rule](https://img.shields.io/badge/textlint-fixable-green.svg)](https://textlint.github.io/)
[![Build Status](https://github.com/Mogztter/textlint-rule-no-repetition/workflows/Build/badge.svg?branch=main)](https://github.com/Mogztter/textlint-rule-no-repetition/actions?query=workflow%3ABuild)
[![npm](https://img.shields.io/npm/v/textlint-rule-no-repetition.svg)](https://www.npmjs.com/package/textlint-rule-no-repetition)

[textlint](https://github.com/textlint/textlint) rule to find repeated words like "the the" or "and and".

## Installation

    $ npm i textlint-rule-no-repetition

## Usage

    $ textlint --fix --rule no-repetition Readme.md

## Configuration

You can configure the rule in your `.textlintrc`:

```js
{
  "rules": {
    "no-repetition": {
      // An array of strings to be ignored
      // In this case, it won't report an error when "really really" is found.
      "ignore": ['really']
    }
  }
}
```

Read more about [configuring textlint](https://github.com/textlint/textlint/blob/master/docs/configuring.md).
