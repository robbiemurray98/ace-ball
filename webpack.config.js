// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "how-to-play.html",
      template: "./src/how-to-play.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "where-to-buy.html",
      template: "./src/where-to-buy.html",
    }),
    new HtmlWebpackPlugin({
      filename:"thank-you-page.html",
      template:"./src/thank-you-page.html",
    }),
    
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
            type: "asset/resource",
        },
    ],
  },
};
