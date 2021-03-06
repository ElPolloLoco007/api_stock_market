const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Helgi application." });
});

// set port, listen for requests
require("./app/routes/stock.routes")(app);
require("./app/routes/bank.routes")(app);
require("./app/routes/transaction_type.routes")(app);
require("./app/routes/transaction.routes")(app);
require("./app/routes/news.routes")(app);
require("./app/routes/live.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
