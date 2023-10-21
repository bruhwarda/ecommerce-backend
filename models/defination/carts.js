const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const carts = sequelize.define(
  "carts",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    total_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "carts",
  }
);
module.exports = carts;
