const db = require("../models");
const Transaction = db.transaction;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  // Validate request
  if (!req.body.fk_stock_id && !req.body.fk_transaction_type_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const transaction = {
    shares: req.body.shares,
    price: req.body.price,
    date: req.body.date,
    fk_stock_id: req.body.fk_stock_id,    
    fk_transaction_type_id: req.body.fk_transaction_type_id, 
    fk_bank_id: req.body.fk_bank_id    
  };

  Transaction.create(transaction)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stock_info."
      });
    });
};

exports.read = (req, res) => {
  const id = req.params.fk_stock_id;

  Transaction.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Transaction.update(req.body, {
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

exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stock was deleted successfully!"
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

//find all stocks
exports.findAll = (req, res) => {
  Stock.findAll()
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

exports.findAllStock = (req, res) => {
  const id = req.params.id;

  Tutorial.findAll({ where: { fk_stock_id: id } })
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

exports.findAllTransaction = (req, res) => {
  const id = req.params.id;

  Tutorial.findAll({ where: { fk_transaction_id: id } })
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

exports.findAllBank = (req, res) => {
  const id = req.params.id;

  Tutorial.findAll({ where: { fk_bank_id: id } })
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
