var router = require("express").Router();
const { userController, authController } = require("../controller/index");
router.get(
  "/getUser",
  authController.authenticateToken,
  userController.getUsers
); 
router.post("/register", userController.createUsers);
router.post("/login", authController.login);

module.exports = router;
