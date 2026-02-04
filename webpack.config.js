// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const isProduction = process.env.NODE_ENV === 'production';

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
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images"
        },
        {
          from: "src/videos", to: "videos"
        },
      ]
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.ejs",
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: "how-to-play.html",
      template: "./src/how-to-play.ejs",
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.ejs",
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.ejs",
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: "where-to-buy.html",
      template: "./src/where-to-buy.ejs",
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename:"thank-you-page.html",
      template:"./src/thank-you-page.ejs",
      inject: 'body',
    }),
    
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
            options: {
              sources: true,
              esModule: false,
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
            type: "asset/resource",
        },
    ],
  },
};
