import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    ignores: ["print.js"],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
      },
    },
  },
];
