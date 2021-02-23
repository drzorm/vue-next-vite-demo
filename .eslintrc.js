// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["simple-import-sort"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",

    "import/order": "off",
    "sort-imports": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",

    "vue/max-attributes-per-line": [
      "error",
      {
        multiline: {
          allowFirstLine: false,
          max: 1,
        },
        singleline: 5,
      },
    ],
  },
};
