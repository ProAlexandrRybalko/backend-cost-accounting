const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  email: String,
  password: String
});

module.exports = User = mongoose.model('User', UserSchema);
