var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 28848);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var pages = require('./routes/pages');
var db = require('./models/db');
app.use('/', pages);
app.use('/db', db);

// 404 NOT FOUND
app.use(function(req, res, next) {
  res.status(404);
  res.send('404 - Not Found');
})

// 500 SERVER EOORO
app.use(function(req, res, next) {
  res.status(404);
  res.send('500 - Server Error');
})

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})