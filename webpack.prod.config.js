const path = require("path");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config");
const util = require("./util");

const production = {
  mode: "production",
  entry: util.getEntry("./src"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./lib"),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json"
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: ["react"]
};

module.exports = merge(baseConfig, production);
