const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop", "root", "root", {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const users = require("../models/User")(sequelize, Sequelize);
const product = require("../models/Product")(sequelize, Sequelize);
const order = require("../models/Order")(sequelize, Sequelize);
users.associate(order);
product.associate(order);
order.associate(users);
order.associate(product);

db.users = users;
db.product = product;
db.order = order;

module.exports = db;
