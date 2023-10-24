const categoryService = require("../../services/categoryService");
module.exports = {
  getCategory: async (req, res) => {
    const data = await categoryService.getCategory();
    res.send(data);
  },
  createCategory: async (req, res) => {
    const data = await categoryService.createCategory(req.body); //for having onli body of the user req
    res.send(data);
  },
  createCategoryHelper: async (data) => {
    const userData = await categoryService.createCategory(data); //for having all the data of the user
    return userData;
  },
};
