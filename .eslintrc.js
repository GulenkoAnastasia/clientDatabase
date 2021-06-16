module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['off'],
    'no-console': ['off'],
    'operator-assignment': ['error', 'never'],
    'prefer-object-spread': ['off'],
    'no-restricted-syntax': ['off'],
    strict: ['off'],
    'prefer-arrow-callback': ['off'],
    'func-names': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'no-underscore-dangle': ['off'],
    'no-shadow': ['error', { allow: ['err'] }],
  },
};
