module.exports = (sequelize, Sequelize) => {
  const stock = sequelize.define("stock", {
    symbol: {
      type: Sequelize.STRING
    }
  });

  return stock;
};