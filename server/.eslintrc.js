module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
  },
};
