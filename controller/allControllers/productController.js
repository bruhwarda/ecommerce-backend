const productService = require("../../services/productService");
module.exports = {
  getProducts: async (req, res) => {
    const getProduct = await productService.getProduct(
      req.params.productId,
      req.body
    );
    res.send(getProduct);
  },
  getAllProducts: async (req, res) => {
    const getProduct = await productService.getAllProducts(req.body);
    res.send(getProduct);
  },
  createProducts: async (req, res) => {
    const data = await productService.createProduct(req.body); //for having onli body of the user req
    res.send(data);
  },
  updateProduct: async (req, res) => {
    const data = await productService.updateProduct(
      req.params.productId,
      req.body
    );
    res.send(data);
  },
  deleteProduct: async (req, res) => {
    const data = await productService.deleteProduct(req.params.productId);
    res.send(data);
  },
};
