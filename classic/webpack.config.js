// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   //Aquí incluiremos muchas cosas.
//   entry: [
//     "./scripts/index.js",
//     "./scripts/landing.js"
//   ],
//   output: {
//     filename: "bundle.js",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(c|sc|sa)ss$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           "css-loader",
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "bundle.css",
//     }),
//   ],
// };


const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    "./scripts/index.js",
    "./scripts/landing.js",
    "./scripts/charts.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};