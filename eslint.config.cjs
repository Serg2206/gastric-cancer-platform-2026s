const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    ignorePatterns: [
      "node_modules/**",
      ".next/**",
      "_tmp_next/**",
      "package.json",
      "postcss.config.mjs",
    ],
  }),
];
