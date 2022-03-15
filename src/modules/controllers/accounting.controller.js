const Accounting = require("../../db/models/accounting/index");


module.exports.getAllAccountings = (req, res) => {
  Accounting.find().then(result => {
    let sum = 0;
    for(let item of result) {
      sum += item.howMuch;
    }
    res.send({accountings: result, sum});
  }).catch(err => console.log(err));
}

module.exports.getOneAccounting = (req, res) => {
  Accounting.findOne({_id: req.query.id}).then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}

module.exports.createNewAccounting = (req, res) => {
  const accounting = new Accounting(req.body);
  accounting.save().then(result => {
    res.send(result);
  }).catch(err => console.log(err));
}

module.exports.deleteAccounting = (req, res) => {
  Accounting.deleteOne({ _id: req.body.id}).then(result => {
    res.sendStatus(204);
  }).catch(err => console.log(err));
}

module.exports.changeAccounting = (req, res) => {
  Accounting.updateOne({ _id: req.body.id}, req.body.data).then(result => {
    res.sendStatus(200);
  }).catch(err => console.log(err));
}
