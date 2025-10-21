import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [
            eslintJs.configs.recommended,
            tseslint.configs.recommended,
            eslintReact.configs['recommended-typescript'],
        ],

        // Configure language/parsing options
        languageOptions: {
            // Use TypeScript ESLint parser for TypeScript files
            parser: tseslint.parser,
            parserOptions: {
                // Enable project service for better TypeScript integration
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },

        // Custom rule overrides (modify rule levels or disable rules)
        rules: {
            '@eslint-react/no-missing-key': 'warn',
            '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
        },
    },
]).concat(eslintPluginPrettier);
