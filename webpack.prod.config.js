const path = require("path");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");

const production = {
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./lib")
  }
};

module.exports = merge(baseConfig, production);
