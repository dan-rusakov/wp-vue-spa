const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(s[ac]ss|css)$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
};
