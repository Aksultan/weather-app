module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'object-curly-spacing': 1,
    'react/jsx-child-element-spacing': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }]
  }
}
