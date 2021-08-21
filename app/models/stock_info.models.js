module.exports = (sequelize, Sequelize) => {
  const stock_info = sequelize.define("stock_info", {
    name: {
      type: Sequelize.STRING
    },
    asset_type: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    cik: {
      type: Sequelize.INTEGER
    },
    exchange: {
      type: Sequelize.STRING
    },
    currency: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    sector: {
      type: Sequelize.STRING
    },
    industry: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }

  });

  return stock_info;
};