const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const products = sequelize.define(
  "products",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    product_name: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    inventory: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: false, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "products",
  }
);
module.exports = products;
