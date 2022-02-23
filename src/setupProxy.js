const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/account-api',
    createProxyMiddleware({
      target: 'https://quiz-app-usnl.onrender.com/',
      changeOrigin: true,
    }),
  );
};
