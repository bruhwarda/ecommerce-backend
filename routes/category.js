var router = require("express").Router();
const { categoryController } = require("../controller/index");
router.get("/getCategory", categoryController.getCategory);
router.post("/createCategory", categoryController.createCategory);

module.exports = router;
