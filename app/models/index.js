const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.stock = require("./stock.models.js")(sequelize, Sequelize);
db.stock_info = require("./stock_info.models.js")(sequelize, Sequelize);
db.stock_data = require("./stock_data.models.js")(sequelize, Sequelize);
db.bank = require("./bank.models.js")(sequelize, Sequelize);
db.transaction_type = require("./transaction_type.models.js")(sequelize, Sequelize);
db.transaction = require("./transaction.models.js")(sequelize, Sequelize);
db.live = require("./live.models.js")(sequelize, Sequelize);


db.stock_data.belongsTo(db.stock, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });
db.stock.hasOne(db.stock_data, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });

db.stock_info.belongsTo(db.stock, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });
db.stock.hasOne(db.stock_info, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });

db.transaction.belongsTo(db.stock, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });
db.stock.hasMany(db.transaction, {foreignKey: 'fk_stock_id', targetKey: 'id',onDelete: 'cascade' });

db.transaction.belongsTo(db.transaction_type, {foreignKey: 'fk_transaction_type_id', targetKey: 'id',onDelete: 'cascade' });
db.transaction_type.hasMany(db.transaction, {foreignKey: 'fk_transaction_type_id', targetKey: 'id',onDelete: 'cascade' });

db.transaction.belongsTo(db.bank, {foreignKey: 'fk_bank_id', targetKey: 'id',onDelete: 'cascade' });
db.bank.hasMany(db.transaction, {foreignKey: 'fk_bank_id', targetKey: 'id',onDelete: 'cascade' });

module.exports = db;
