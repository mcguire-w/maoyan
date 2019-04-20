module.exports = {
  devServer: {
    proxy: {
      '/maoyan': {
        target: 'http://m.maoyan.com',
        pathRewrite: {
          '^/maoyan': ''
        }
      }
    }
  }
}
