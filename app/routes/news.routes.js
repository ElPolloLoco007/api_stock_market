module.exports = app => {
    const news = require("../controllers/news.controller.js");
  
    var router = require("express").Router();
  
    // Create a bank
    router.get("/yahoo/:id", news.yahoo);
    router.get("/reddit/dd", news.redditdd);

   
    app.use('/api/news', router);

  };