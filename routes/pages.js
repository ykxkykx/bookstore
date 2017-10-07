var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {title: '首页'});
});

router.get('/login', function(req, res) {
  res.render('admin/login', {title: '登录'});
});

router.get('/register', function(req, res) {
  res.render('admin/register', {title: '注册'});
});

router.get('/booktype', function(req, res) {
  res.render('content/booktype', {title: '书籍分类'});
});

router.get('/book', function(req, res) {
  res.render('content/book', {title: '单页书籍'});
});

module.exports = router;