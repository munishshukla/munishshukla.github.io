"use strict";

const { resolve } = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      // Copy static directory to public directory
      {
        context: resolve(__dirname, "../"),
        from: "static",
      },
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../static/index.html"),
    }), // Call the path of the js file bundled with HTML
  ],
};
