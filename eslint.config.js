import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
//import { globalIgnores } from 'eslint/config'

import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config([
  // globalIgnores(['dist']),
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      //reactHooks.configs['recommended-latest'],
      //reactRefresh.configs.vite,
      //react.configs.recommended,
      // "plugin:react/recommended",
      //'plugin:jsx-a11y/recommended',
      //'plugin:import/recommended',
      //importPlugin.configs.recommended,
      prettier,
    ],
    plugins: {
      'react-hooks': reactHooks,
      //reactHooks,
      'react-refresh': reactRefresh,
      react,
      //'jsx-a11y': jsxA11y,
      //'import': importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Ваші власні, додаткові правила або перевизначення
      //'jsx-a11y/alt-text': 'warn',
      //'jsx-a11y/anchor-is-valid': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
