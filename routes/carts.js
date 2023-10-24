var router = require("express").Router();
const { cartController } = require("../controller/index");
router.get("/getCart", cartController.getCart);
router.post("/add/:productId", cartController.createCart);
router.delete("/remove/:cartId/:productId", cartController.deleteCart);

module.exports = router;
