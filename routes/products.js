var router = require("express").Router();
const { productController } = require("../controller/index");
router.get("/getProduct/:productId", productController.getProducts);
router.get("/getAllProducts", productController.getAllProducts);
router.post("/addProduct", productController.createProducts);
router.put("/updateProduct/:productId", productController.updateProduct);

router.delete("/deleteProduct/:productId", productController.deleteProduct);

module.exports = router;
