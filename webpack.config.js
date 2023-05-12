const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
       
      },
      { test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],}
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
