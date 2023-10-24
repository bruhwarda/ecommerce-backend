const cartService = require("../../services/cartService");
const userController = require("./userController");
module.exports = {
  getCart: async (req, res) => {
    const cart = await cartService.getCart(req.body);
    res.send(cart);
  },

  createCart: async (req, res) => {
    const result = await cartService.createCart(req.body, req.params.productId);
    res.send(result);
  },

  deleteCart: async (req, res) => {
    const result = await cartService.deleteCart(
      req.params.cartId,
      req.params.productId
    );
    console.log("result", result);
    res.send("Product from cart deleted");
    // res.sendtatus(result);
  },
};
