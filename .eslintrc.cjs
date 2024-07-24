module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-unresolved": "error",
    "no-unreachable-loop": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^unused" },
    ],
    camelcase: ["warn", { ignoreGlobals: true, ignoreImports: true }],
    eqeqeq: ["error", "smart"],
    "no-lonely-if": "error",
    "no-var": "error",
    "prefer-const": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
