module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', "plugin:react/jsx-runtime"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, coma: true }
    ],
    'comma-dangle': ['error', 'never'],
    'import/extensions': [
      'off',
      {
        ts: 'always',
        tsx: 'always'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'react/require-default-props': [
      'off',
      { forbidDefaultForRequired: false, ignoreFunctionalComponents: false }
    ],
    'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
