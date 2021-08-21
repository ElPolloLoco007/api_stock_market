module.exports = {
    HOST: "192.168.100.50",
    USER: "pi4",
    PASSWORD: "H0jy5be7",
    DB: "stock_market",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  