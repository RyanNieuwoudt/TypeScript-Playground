module.exports = {
  env: { jest: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
    "functional",
  ],
  rules: {
    "simple-import-sort/imports": [
      "error",
      { groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]] },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts"] },
    "import/resolver": { typescript: {} },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: { project: "./tsconfig.json", tsconfigRootDir: __dirname },
    },
  ],
};
