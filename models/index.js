let sequelize = require("../common/dbConnection");
let user = require("./defination/users");
let categories = require("./defination/categories");

let products = require("./defination/products");
let carts = require("./defination/carts");
const models = {
  user,
  categories,

  products,
  carts,
};
//one-one relation
user.hasOne(carts, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});
carts.belongsTo(user, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "userId", allowNull: false, unique: true },
});

//many-many relation
carts.belongsToMany(products, {
  through: "cart_items",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
products.belongsToMany(carts, {
  through: "cart_items",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
//one-many relation
categories.hasMany(products, {
  foreignKey: { name: "categoryId", allowNull: false, unique: true },
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
products.belongsTo(categories, {
  foreignKey: { name: "categoryId", allowNull: false, unique: true },
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

sequelize.models = models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
