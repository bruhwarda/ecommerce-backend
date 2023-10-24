const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const cart_items = sequelize.define(
  "cart_items",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "cart_items",
  }
);
module.exports = cart_items;
