const path = require("path");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");

const production = {
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./lib"),
    libraryTarget: "umd"
  }
};

module.exports = merge(baseConfig, production);
