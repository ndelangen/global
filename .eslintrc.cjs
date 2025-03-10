/* eslint-env node */

module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  root: true,
};
