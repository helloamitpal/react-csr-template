const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/top-headlines',
    proxy({
      target: 'https://newsapi.org/v2',
      changeOrigin: true
    })
  );
};
