const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const accountingScheme = new Schema({
  where: String,
  date: Date,
  howMuch: Number
});

module.exports = Accounting = mongoose.model("Accounting", accountingScheme);
