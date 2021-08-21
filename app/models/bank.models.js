module.exports = (sequelize, Sequelize) => {
    const bank = sequelize.define("bank", {
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      short_name: {
        type: Sequelize.STRING,
        unique: true
      }
    });  
    return bank;
    
  };