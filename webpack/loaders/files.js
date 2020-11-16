module.exports = {
  test: /\.(doc|docx|pdf|xls|xlsx)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'files/[name].[ext]?v=[hash]',
        publicPath: '/wp-content/themes/colibri/dist',
      },
    },
  ],
};
