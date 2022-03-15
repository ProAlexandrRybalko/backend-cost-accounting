const jwt = require('jsonwebtoken');
const User = require("../../db/models/user/index");

module.exports.register = function(req, res) {
  const newUser = new User(req.body);
  newUser.save().then(result => {
    res.status(201).send(jwt.sign({ email: newUser.email, fullName: newUser.fullName, _id: newUser._id }, 'RESTFULAPIs'));
  }).catch(err => console.log(err));
};

module.exports.signIn = function(req, res) {
  const user = User.findOne({
    email: req.body.email,
    password: req.body.password
  }, function(err, obj) {
    if(obj) {
      res.status(201).send(jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs'));
    }
    else {
      res.status(401).send({ message: 'Authentication failed. Invalid user or password.' });
    }
  });
}

