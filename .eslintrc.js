module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        // Disabled rules from presets
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'import/no-unresolved': 'off',
        'import/no-named-as-default': 0,
        'import/no-cycle': ['warn', { maxDepth: 6, ignoreExternal: true }],
        'react/forbid-component-props': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/no-unknown-property': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-useless-escape': 'off',
        'no-unused-vars': 'off',
        // Additional rules
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-explicit-any': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'try' },
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        '@typescript-eslint/no-magic-numbers': [
            'error',
            { ignore: [-1, 0, 1], ignoreEnums: true, ignoreNumericLiteralTypes: true },
        ],
        'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        // Sorting imports and exports
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'padding-line-between-statements': [
                    'error',
                    { blankLine: 'always', prev: ['const', 'let'], next: '*' },
                    { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
                    { blankLine: 'always', prev: '*', next: 'try' },
                    { blankLine: 'always', prev: '*', next: 'return' },
                ],
            },
        },
        {
            files: ['**/*.ts'],
            rules: { 'max-lines': 'off' },
        },
        {
            files: ['**/types/*.ts', '**/types.ts'],
            rules: {
                'max-lines': 'off',
                '@typescript-eslint/no-magic-numbers': 'off',
            },
        },
    ],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        react: {
            version: 'detect',
        },
    },
};
