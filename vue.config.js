module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true
      }
    }
  }
}
