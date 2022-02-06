module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    rules: {
        'array-callback-return': [
            'error',
            {
                checkForEach: true
            }
        ],
        'block-scoped-var': 'error',
        camelcase: 'error',
        'consistent-return': 'error',
        curly: ['error', 'all'],
        // Comment pattern: `// no default`
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'guard-for-in': 'error',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc'
                },
                'newlines-between': 'always',
                warnOnUnassignedImports: true
            }
        ],
        'multiline-comment-style': ['error', 'separate-lines'],
        'no-array-constructor': 'error',
        'no-bitwise': 'warn',
        'no-caller': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extend-native': 'warn',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        // https://github.com/prettier/eslint-config-prettier#no-mixed-operators
        'no-mixed-operators': 'warn',
        'no-multi-str': 'error',
        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'all'
            }
        ],
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-use-before-define': [
            'error',
            {
                classes: true,
                functions: true,
                variables: true
            }
        ],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'object-shorthand': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'prefer-const': 'error',
        'prefer-destructuring': [
            'error',
            {
                array: true,
                object: true
            },
            {
                enforceForRenamedProperties: false
            }
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        radix: ['error', 'as-needed'],
        'require-await': 'error',
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                minKeys: 2,
                natural: true
            }
        ],
        'sort-vars': 'error',
        'spaced-comment': ['error', 'always'],
        'symbol-description': 'error',
        yoda: ['error', 'never']
    },
    settings: {
        'import/resolver': {
            // https://github.com/import-js/eslint-plugin-import#settings
            // https://github.com/import-js/eslint-plugin-import/issues/869#issuecomment-320267555
            // https://www.npmjs.com/package/eslint-import-resolver-node
            // https://github.com/import-js/eslint-plugin-import#resolvers
            node: {
                extensions: ['.js', '.jsx']
            }
        },
        react: {
            version: 'detect'
        }
    }
};
