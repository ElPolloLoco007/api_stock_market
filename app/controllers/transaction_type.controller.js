const db = require("../models");
const Transaction_type = db.transaction_type;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Transaction_type.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
