const Accounting = require("../../db/models/accounting/index");


module.exports.getAllAccountings = (req, res) => {
  Accounting.find().then(result => {
    res.send({data: result});
  }).catch(err => console.log(err));
}

module.exports.createNewAccounting = (req, res) => {
  const accounting = new Accounting(req.body);
  accounting.save().then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}

module.exports.deleteAccounting = (req, res) => {
  Accounting.deleteOne({ _id: req.query.id}).then(result => {
    res.send({data: "deleted"});
  }).catch(err => console.log(err));
}

module.exports.changeAccounting = (req, res) => {
  Accounting.updateOne({ _id: req.body.id}, req.body).then(result => {
    res.send({data: "changed"});
  }).catch(err => console.log(err));
}
