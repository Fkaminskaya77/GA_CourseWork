const Bachelor = require('../models/Bachelor.js')

module.exports = {
  index: (req, res) => {
    // console.log(req.params);
    Bachelor.find({}).then((bachelors) => {
      res.json(bachelors);
    });
  },
  showYear: (req, res) => {
    Bachelor.find({ year: parseInt(req.params.year) }).then((bachelor) => {
      res.json(bachelor);
    });
  },
  showName: (req, res) => {
    Bachelor.find({ name: req.params.name }).then((bachelor) => {
      res.json(bachelor);
    });
  },
  create: (req, res) => {
    console.log(req.body);
    Bachelor.create(req.body).then((bachelor) => {
      res.json(bachelor);
    });
  },
  edit: (req, res) => {
    console.log(req.body);
    console.log(req.params.name);
    Bachelor.findOneAndUpdate({ name: req.params.name }, req.body).then(
      (bachelor) => {
        res.json(bachelor);
      }
    );
  },
  delete: (req, res) => {
    Bachelor.delete({ name: req.params.name }).then((bachelor) => {
    res.json(bachelor);
     });
  },
};














