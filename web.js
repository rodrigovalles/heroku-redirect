const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

//app.use('/', createProxyMiddleware({ target: 'https://api.triunfonet.com.ar', changeOrigin: true }));
app.use('/', (req, res) => {
  res.json({hola: true})
})
app.listen(5000);