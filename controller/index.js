module.exports = {
  //basically exporting all the elements used
  userController: require("./allControllers/userController"),
  authController: require("./common/authController"),
  cartController: require("./allControllers/cartController"),
  productController: require("./allControllers/productController"),
  categoryController: require("./allControllers/categoryController"),
  //require work as import that we use in react
};
