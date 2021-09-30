module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@actions', './src/redux/actions'],
          ['@services', './src/services'],
          ['@pages', './src/pages/'],
          ['@components', './src/components'],
          ['@utils', './src/utils/'],
        ],
      },
    },
  },
  rules: {
    'react/prop-types': ['off'],
    'no-param-reassign': 'off',
  },
};
