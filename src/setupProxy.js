const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://netease-cloud-music-api-umber-gamma.vercel.app',
      changeOrigin: true,
      secure: true,
      pathRewrite: {'^/api': ''},
    })
  )
}