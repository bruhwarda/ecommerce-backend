const { models } = require("../models");
const bcrypt = require("bcrypt");
module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createUsers: async (data) => {
    const salltRound = 10;
    data.password = bcrypt.hashSync(data.password, salltRound); //password k andr 10 ki string pass krdeta hai
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.user.create(data);
    console.log(result);
    return result;
  },
};