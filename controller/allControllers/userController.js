const userService = require("../../services/userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUsers: async (req, res) => {
    const data = await userService.createUsers(req.body); //for having onli body of the user req
    res.send(data);
  },
  createUsersHelper: async (data) => {
    const userData = await userService.createUsers(data); //for having all the data of the user
    return userData;
  },
};
