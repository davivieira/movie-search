const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/app",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body"
    })
  ],
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "app")],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    contentBase: "./public",
    stats: "minimal"
  },
  devtool: "source-map"
};
