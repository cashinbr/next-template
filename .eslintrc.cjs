/** @type import('eslint').Linter.Config */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'standard-with-typescript', 'prettier'],
  ignorePatterns: ['.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  reportUnusedDisableDirectives: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['./*.js', './*.cjs', './*.mjs'],
      parserOptions: {
        project: './tsconfig.configfiles.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableObject: true }],
  },
};
