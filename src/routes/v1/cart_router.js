
const express = require("express");
const { updateCart, getCartProducts } = require("../../controllers/cart_controller");
const { isLogedIn } = require("../../middlewares/auth_middleware");
const cartRouter = express.Router()



cartRouter.patch("/:id", [isLogedIn],  updateCart)
cartRouter.get("/:id/products", [isLogedIn],  getCartProducts)

module.exports = cartRouter;