module.exports = {
  env: {
    es2016: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: es2016,
    sourceType: 'module',
  },
};
