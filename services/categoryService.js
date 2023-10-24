const { models } = require("../models");

module.exports = {
  getCategory: async () => {
    const result = await models.categories.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },

  createCategory: async (data) => {
    const result = await models.categories.create(data);
    console.log(result);
    return result;
  },
};
