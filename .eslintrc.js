const webpack = require("webpack");
module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  // "plugin:vue/essential",
  // "eslint:recommended",
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["error", {
      "endOfLine": "crlf"
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
