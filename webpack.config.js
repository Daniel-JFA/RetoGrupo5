const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //Aquí incluiremos muchas cosas.
  entry: [
    "./scripts/index.js",
    "./scripts/landing.js"
  ],
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
