module.exports = app => {
    const stock = require("../controllers/stock.controller.js");
  
    var router = require("express").Router();
  
    // Create a stock
    router.post("/", stock.create);
  
    // Retrieve all stocks
    router.get("/", stock.findAll);
    
    // Retrieve a single stock with id
    router.get("/:id", stock.read);

    // Retrieve a single stock with name
    router.get("/id/:id", stock.readName);
  
    // Update a stock with id
    router.put("/:id", stock.update);
  
    // Delete a stock with id
    router.delete("/:id", stock.delete);
    
    app.use('/api/stock', router);
  };