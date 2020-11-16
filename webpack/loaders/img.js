module.exports = {
  test: /\.(png|svg|jpg|gif|jpeg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]?v=[hash]',
        publicPath: '/wp-content/themes/colibri/dist',
      },
    },
  ],
};
