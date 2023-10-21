const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const user = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false, //that this type is not required SO JISKO LAZMI KRNA HAI USKO FALSE KRNA HAI
    },

    email: {
      unique: true, //because every user has a unique email id
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true }, //for validation
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true, //db me se data delete nhi krta mtlb pgADMIN ME PRA HOTA HAI
    sequelize, //instance
    modelName: "user",
  }
);
module.exports = user;
