const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://netease-cloud-music-api-umber-gamma.vercel.app',
      changeOrigin: true,
      secure: true,
      pathRewrite: {'^/api': ''},
    }),
    proxy('/local', {
      target: 'http://localhost:3001', // 测试环境
      changeOrigin: true,
      secure: false,
      pathRewrite: {'^/local': ''},
    }),
  )
}