module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'arrow-body-style': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-console': ['error', { allow: ['log', 'error', 'info', 'warn'] }],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-useless-escape': 0,
    'no-unused-vars': 0,
    'no-restricted-exports': 0,
    'no-promise-executor-return': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        usePrettierrc: false,
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
