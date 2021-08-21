module.exports = app => {
    const live = require("../controllers/live.controller.js");
  
    var router = require("express").Router();
  
    // insert stock price
    router.get("/:id", live.read);
   
    app.use('/api/live', router);

  };