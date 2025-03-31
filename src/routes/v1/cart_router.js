
const express = require("express");
const { updateCart, getCartProducts, clearCart } = require("../../controllers/cart_controller");
const { isLogedIn } = require("../../middlewares/auth_middleware");
const cartRouter = express.Router()



cartRouter.patch("/:id", [isLogedIn],  updateCart)
cartRouter.get("/:id/products", [isLogedIn],  getCartProducts)
cartRouter.delete("/:id/products", [isLogedIn],  clearCart)

module.exports = cartRouter;