const productService = require("../../services/productService");
const categoryController = require("./categoryController");
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
    const { category_name, ...product } = req.body;
    const category = await categoryController.createCategoryHelper({
      category_name: category_name,
    });
    const categoryId = category.id;

    const data = await productService.createProduct({
      categoryId,
      product_name: product.product_name,
      price: product.price,
      inventory: product.inventory,
      description: product.description,
    }); //for having onli body of the user req
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
