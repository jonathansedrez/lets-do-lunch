// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
    },
    env: {
      browser: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    rules: {
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
        },
      ],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': [
        'error',
      ],
      "prettier/prettier": ["error", { "singleQuote": true }]
    },
  };
