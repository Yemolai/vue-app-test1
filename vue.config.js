// vue.config.js
var production = process.env.NODE_ENV === 'production';
module.exports = {
  // options...
  configureWebpack: {
    entry: [
      'webpack-dev-server/client?https://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  devServer: {
    hotOnly: true,
    hot: true,
    open: false,
    compress: true,
    disableHostCheck: !production,
    port: production ? process.env.PORT : 8080,
    host: production ? process.env.IP : process.env.IP || 'localhost',
    allowedHosts: [
      '.vfs.cloud9.us-west-2.amazonaws.com'
    ]
  }
}