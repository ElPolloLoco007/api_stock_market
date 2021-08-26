module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a bank
    router.get("/yahoo/:id", news.yahoo);
    router.get("/fearandgreedindex", news.fearandgreedindex);
    router.get("/wsbmentions", news.wsbmentions);

   
    app.use('/api/news', router);

  };