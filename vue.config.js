const fs = require('fs');
const path = require('path');
const resolve = dir => path.join(__dirname, '/', dir);

module.exports = {
  publicPath: '/vue2-cli3-typescript/',
  configureWebpack: {
    devServer: {
      host: '127.0.0.1',
      hot: false,
      inline: false,
      progress: true,
      contentBase: resolve('./'),
      compress: true,
      disableHostCheck: true,
      historyApiFallback: true
    },
    resolve: {
      alias: {
        static: resolve('./static')
      }
    }
  }
}