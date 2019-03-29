const util = require("./util");

module.exports = {
  entry: util.getEntry("./src"),
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: "less-loader"
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: ["react"]
};
