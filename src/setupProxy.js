const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://newsapi.org/v2'
      changeOrigin: true,
    })
  );
};
