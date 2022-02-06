module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    eqeqeq: "error",
    "no-else-return": "error",
    "no-console": "error",
    "array-callback-return": ["error", { checkForEach: true }],
    // TODO
    // https://github.com/prettier/eslint-config-prettier#no-mixed-operators
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      // https://github.com/import-js/eslint-plugin-import#settings
      // https://github.com/import-js/eslint-plugin-import/issues/869#issuecomment-320267555
      // https://www.npmjs.com/package/eslint-import-resolver-node
      // https://github.com/import-js/eslint-plugin-import#resolvers
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
