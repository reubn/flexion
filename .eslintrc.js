module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
      semi: [2, 'never'],
      'max-len': 0,
      'func-names': 0,
      'prefer-arrow-callback': 0,
      'arrow-parens': [2, 'as-needed'],
      'no-console': 'warn',
      'comma-dangle': [2, 'never'],
      'comma-spacing': ['error', {before: false, after: true}],
      'space-before-function-paren': ['error', {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
      }],
      'space-before-blocks': [2, {functions: 'never', keywords: 'never', classes: 'always'}],
      'object-curly-spacing': [2, 'never'],
      'object-curly-newline': 0,
      curly: [2, 'multi-line'],
      'consistent-return': 0,
      'no-plusplus': 0,
      'block-spacing': [2, 'never'],
      'space-infix-ops': 0,
      'no-prototype-builtins': 0,
      'no-confusing-arrow': 0,
      'no-return-assign': [2, 'except-parens'],
      'class-methods-use-this': 0,
      'no-underscore-dangle': 0,
      'no-param-reassign': [2, {props: false}],
      'no-bitwise': ['warn', {allow: ['^', '~', '<<', '>>', '>>>', '|=', '&=', '^=', '<<=', '>>=', '>>>=']}],
      'no-constant-condition': ['error', {checkLoops: false}],
      'keyword-spacing': [2, {
        after: false,
        overrides: {
          return: {
            after: true
          },
          import: {
            after: true
          },
          export: {
            after: true
          },
          default: {
            after: true
          },
          const: {
            after: true
          },
          else: {
            after: true
          },
          from: {
            after: true,
            before: true
          },
          case: {
            after: true
          }
        }
      }]
    }
}
