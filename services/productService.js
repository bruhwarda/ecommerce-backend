const { models } = require("../models");
module.exports = {
  createProduct: (data) => {
    const product = models.products.create(data);
    return product;
  },
  updateProduct: async (productId, data) => {
    console.log("printing product id" + productId);
    try {
      console.log("Entering try code block");
      const product = await models.products.findOne({
        where: { id: productId },
      });
      console.log("Printing product ");
      console.log(product);
      if (product) {
        await models.carts.update(
          { total_items: data.total_items, total_price: data.total_price },
          { where: { id: productId } }
        );
        await models.products.update(
          {
            product_name: data.product_name,
            price: data.price,
            inventory: data.inventory,
            description: data.description,
          },
          {
            where: { id: productId },
          }
        );
        const updateProduct = await models.products.findOne({
          where: { id: productId },
        });
        return updateProduct;
      }
    } catch (err) {
      console.log("no such product exist to Modify");
      return "No such product found with that respective id";
    }
  },
  getProduct: async (productId) => {
    try {
      const product = await models.products.findOne({
        where: { id: productId },
      });
      console.log(productId);

      if (!product) {
        throw new Error("Product not found");
      }

      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  },

  getAllProducts: async () => {
    const product = await models.products.findAll();
    if (product) {
      return product;
    } else {
      return "Can't find products";
    }
  },
  deleteProduct: async (productId) => {
    const deleted = await models.products.destroy({ where: { id: productId } });
    if (deleted > 0) {
      console.log("The number of deleted rows is " + deleted);
      return "product deleted";
    } else {
      return "couldn't find the specific product";
    }
  },
};
