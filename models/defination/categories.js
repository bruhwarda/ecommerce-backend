const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const categories = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "categories",
  }
);
module.exports = categories;
