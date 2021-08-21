module.exports = app => {
    const bank = require("../controllers/bank.controller.js");
  
    var router = require("express").Router();
  
    // Create a bank
    router.post("/", bank.create);
   
    // Retrieve a single bank with id
    router.get("/:id", bank.read);
  
    // Update a bank with id
    router.put("/:id", bank.update);
  
    // Delete a bank with id
    router.delete("/:id", bank.delete);
  
    // Retrieve all banks
    router.get("/", bank.findAll);
  
    app.use('/api/bank', router);
  };