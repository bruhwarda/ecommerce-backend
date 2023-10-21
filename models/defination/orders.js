const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const orders = sequelize.define(
  "orders",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "orders",
  }
);
module.exports = orders;
