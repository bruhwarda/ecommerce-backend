const { models } = require("../models");

module.exports = {
  getCart: async () => {
    const result = await models.carts.findAll();
    return result;
  },

  createCart: async (data, productId) => {
    console.log(productId);

    const product = await models.products.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    // // Add the product to the cart
    const cart = await models.carts.findOne({ where: { userId: data.userId } });

    if (cart) {
      await cart.addProducts(product);
    } else {
      const newCart = await models.carts.create(data);
      await newCart.addProducts(product);
    }

    // Update total_items and total_price
    const cartUpdate = await models.carts.findOne({
      where: { userId: data.userId },
      include: [models.products],
    });

    // const totalItems = updatedCart.products.length;
    // const totalPrice = updatedCart.products.reduce(
    //   (total, product) => total + product.price,
    //   0
    // );

    // await updatedCart.update({
    //   total_items: totalItems,
    //   total_price: totalPrice,
    // });

    return cartUpdate;
  },

  deleteCart: async (cartId, productId) => {
    console.log(cartId);
    const cart = await models.carts.findOne({
      where: { id: cartId },
    });

    if (!cart) {
      throw new Error("Cart not found");
    }

    // Remove the product from the cart
    const updatedCart = await cart.removeProduct(productId);
    // Update total_items and total_price
    // const updatedCart = await models.carts.findOne({
    //   where: { userId },
    //   include: [models.products],

    // });

    // const totalItems = updatedCart.products.length;
    // const totalPrice = updatedCart.products.reduce(
    //   (total, product) => total + product.price,
    //   0
    // );

    // await updatedCart.update({
    //   total_items: totalItems,
    //   total_price: totalPrice,
    // });

    return updatedCart;
  },
};
