module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },

  plugins: [
    "vue",
    "@typescript-eslint",
    "prettier"
  ],

  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": "warn"
  },
};
