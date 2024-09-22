module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all', // Include all recommended rules for React Native
        'plugin:import/errors', // Add import errors
        'plugin:import/warnings', // Add import warnings
        'prettier', // Make sure this is always the last item
    ],
    parser: '@typescript-eslint/parser', // If you're using TypeScript
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native', '@typescript-eslint', 'import'], // Include plugins for TypeScript if used
    rules: {
        'react/prop-types': 'off', // Disable prop-types as we are using TypeScript
        'react-native/no-inline-styles': 'warn', // Warn about inline styles
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the version of React to use
        },
    },
};
