module.exports = (sequelize, Sequelize) => {
    const transaction = sequelize.define("transaction", {
      shares: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull : false
      },
      date: {
        type: Sequelize.DATE,
        allowNull : false
      },
      fk_stock_id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull : false
      },
      fk_transaction_type_id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull : false
      },
      fk_bank_id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull : false
      },
    });
      return transaction;
  };