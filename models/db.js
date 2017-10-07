var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/bookstore';

mongoose.connect(DB_URL, {useMongoClient: true});

var con = mongoose.connection;

con.on('connected', function() {
  console.log("Mongoose connect " + DB_URL + " success");
});

con.on('error', function(err) {
  console.log("Mongoose connect Error: " + err);
});

con.on("disconnected", function() {
  console.log("Mongoose connect disconnected");
});

var Schema = mongoose.Schema;
var bookSchema = new Schema({
  BookBriefInfo: String,
  BookName: String,
  BookPublishing: String,
  BookDate: String,
  BookCover: String,
  BookClass: Number,
  BookISBN: String,
  BookAuthor: String,
  BookPrice: Number,
  BookInventory: Number,
  BookOnShelf: Boolean,
  BookIsSpecial: Boolean
});

router.get('/indexbookdata', function(req, res) {
  var Book = mongoose.model('Book', bookSchema);
  Book.find({}, {
    BookClass: 1,
    BookName: 1,
    BookPrice: 1,
    BookCover: 1,
    BookISBN: 1,
    BookIsSpecial: 1
  }, function(err, books) {
    res.json(JSON.stringify(books));
  });
});

router.get('/booktypedata', function(req, res) {
  var Book = mongoose.model('Book', bookSchema);
  Book.find({}, {
    BookClass: 1,
    BookName: 1,
    BookPrice: 1,
    BookCover: 1,
    BookISBN: 1,
    BookIsSpecial: 1
  }, function(err, books) {
    res.json(JSON.stringify(books));
  });
});

module.exports = router;