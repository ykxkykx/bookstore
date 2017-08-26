var express = require('express');

var app = express();

app.set('port', process.env.PORT || 28848);

// 404 NOT FOUND
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
})

// 500 SERVER EOORO
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('500 - Server Error');
})

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})