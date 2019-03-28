const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");

const development = {
  mode: "development"
};

module.exports = merge(baseConfig, development);
