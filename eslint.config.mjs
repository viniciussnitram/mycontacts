import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      quotes: ["error", "single"],
      semi: ["error", "always"]
    }
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
];
