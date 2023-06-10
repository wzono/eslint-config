const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@wzono/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    TS ? '@wzono/eslint-config-ts' : '@wzono/eslint-config-basic',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-no-leaked-render': ['error'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  },
}
