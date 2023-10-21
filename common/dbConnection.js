const config = require("../config");
const { Sequelize } = require("sequelize");

var database = new Sequelize(config.db); //if we want to access specific object from config file then we go config.___
database //instance of database
  .authenticate()
  .then(() => {
    //checks k authenticate hota hai k nhi and its a promise k obj create howa k nhi
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = database;
