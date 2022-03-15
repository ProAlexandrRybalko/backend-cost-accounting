const Book = require("../../db/models/book/index");


module.exports.getAllBooks = (req, res) => {
  Book.find().then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}

module.exports.createNewBook = (req, res) => {
  const book = new Book(req.body);
  book.save().then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}

module.exports.deleteBook = (req, res) => {
  Book.deleteOne({ _id: req.body.id}).then(result => {
    res.sendStatus(204);
  }).catch(err => console.log(err));
}

module.exports.getBook = (req, res) => {
  Book.findOne({ _id: req.body.id }).then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}
