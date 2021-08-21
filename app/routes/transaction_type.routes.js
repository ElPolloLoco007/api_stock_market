module.exports = app => {
    const transaction_type = require("../controllers/transaction_type.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve all Tutorials
    router.get("/", transaction_type.findAll);
   
    app.use('/api/transaction_type', router);
  };