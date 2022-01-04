var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'https://api.triunfonet.com.ar';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.use('/ping', (req, res) => {
  res.json({hola: true})
})

app.use('*', createProxyMiddleware({ target: 'https://api.triunfonet.com.ar', changeOrigin: true }));


// app.get('*', function(request, response) {
//   response.redirect(redirectStatus, newBaseURL + request.url);
// });

app.listen(port, function() {
  console.log("Listening on " + port);
});