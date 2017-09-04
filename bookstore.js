var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 28848);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {title: '首页'});
});

app.get('/login', function(req, res) {
  res.render('admin/login', {title: '登录'});
});

app.get('/register', function(req, res) {
  res.render('admin/register', {title: '注册'})
})
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