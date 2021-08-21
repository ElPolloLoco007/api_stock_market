module.exports = (sequelize, Sequelize) => {
    const transaction_type = sequelize.define("transaction_type", {
      type: {
        type: Sequelize.STRING,
        unique: true
      }
    });

    return transaction_type;
  };