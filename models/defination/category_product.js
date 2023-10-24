const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const category_product = sequelize.define(
  "category_product",
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
    modelName: "category_product",
  }
);
module.exports = category_product;
