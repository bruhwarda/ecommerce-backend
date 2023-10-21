let sequelize = require("../common/dbConnection");
let user = require("./defination/users");
let categories = require("./defination/categories");
let orders = require("./defination//orders");
let products = require("./defination/products");
let carts = require("./defination/carts");
const models = {
  user,
  categories,
  orders,
  products,
  carts,
};
//one-one relation
// user.hasOne(carts, {
//   onDelete: "CASCADE",
// });
// carts.belongsTo(user, {
//   onDelete: "CASCADE",
// });
sequelize.models = models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
