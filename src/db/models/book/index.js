const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  year: String,
  desc: String
});

module.exports = Book = mongoose.model('Book', BookSchema);
