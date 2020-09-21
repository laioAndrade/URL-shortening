module.exports = {
  env: {
    "es2020": true,
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [
      "warn",
      {extensions: ['.jsx', '.js']}
    ],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
  },
};
