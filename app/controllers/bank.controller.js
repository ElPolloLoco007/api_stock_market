const db = require("../models");
const Bank = db.bank;
const Op = db.Sequelize.Op;

// Create a bank
exports.create = (req, res) => {

  // Validate request
  if (!req.body.bank) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const bank = {
    bank: req.body.bank
  };

  Bank.create(bank)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stock."
      });
    });
};

//retrive a bank
exports.read = (req, res) => {
  const id = req.params.id;

  Bank.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

//update a bank
exports.update = (req, res) => {
  const id = req.params.id;

  Bank.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

//delete a bank
exports.delete = (req, res) => {
  const id = req.params.id;

  Bank.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bank was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Stock with id=${id}. Maybe Stock was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

//find all banks
exports.findAll = (req, res) => {
  Bank.findAll()
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
