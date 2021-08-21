module.exports = app => {
    const transaction = require("../controllers/transaction.controller.js");
  
    var router = require("express").Router();
  
    // Create new transaction
    router.post("/", transaction.create);  
  
    // Retrieve a single transaction with fk
    router.get("/:id", transaction.read);
  
    // Update a transaction with id
    router.put("/:id", transaction.update);
  
    // Delete a transaction with id
    router.delete("/:id", transaction.delete);  

    // Retrieve all transactions
    router.get("/", transaction.findAll);
    
    // Retrieve all transactions by stock
    router.get("/stock/:stock", transaction.findAllStock);

    // Retrieve all transactions by stock
    router.get("/transaction/:transaction", transaction.findAllTransaction);
  
    // Retrieve all transactions by stock
    router.get("/bank/:bank", transaction.findAllBank);

    app.use('/api/transaction', router);
  };