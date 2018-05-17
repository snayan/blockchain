module.exports = {
  root: true,
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: 'eslint:recommended',
  env: {
    'es6': true,
    'browser': true
  },
  plugins: [
    "html"
  ],
  'globals': {
    "process": true,
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'curly': [
      2,
      'all'
    ],
    'semi': 2,
    'quotes': [2, 'single'],
    'indent': [2, 2,
      {
        'SwitchCase': 1
      }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'space-unary-ops': [
      2,
      {
        'nonwords': false,
        'overrides': {}
      }
    ],
    'eol-last': 2,
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'ignore',
        'named': 'never'
      }
    ],
    'no-multiple-empty-lines': 2,
    'no-with': 2,
    'no-spaced-func': 2,
    'brace-style': [
      2,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'space-infix-ops': 2,
    'keyword-spacing': 2,
    'space-in-parens': [
      2,
      'never'
    ],
    'space-before-blocks': [
      2,
      'always'
    ],
    'dot-notation': 2,
    'spaced-comment': 0,
    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'operator-linebreak': [
      2,
      'after'
    ],
    'one-var': [
      2,
      'never'
    ],
    'no-multi-str': 2,
    'array-bracket-spacing': 2,
    'no-undef': 'off', // https://github.com/eslint/typescript-eslint-parser/issues/416，
    'no-unused-vars': 'off' // https://github.com/eslint/typescript-eslint-parser/issues/55
  }
};
