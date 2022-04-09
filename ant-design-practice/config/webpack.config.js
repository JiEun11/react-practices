const path = require("path");

module.exports = (env) => ({
  mode: "none",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("../backend/src/main/resources"),
    filename: "static/js/main.js",
    assetModuleFilename: "static/images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          configFile: path.resolve("config/babel.config.json"),
        },
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    proxy: {
      "/api": "http://localhost:8080",
      "/assets/gallery": "http://localhost:8080",
    },
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
});
