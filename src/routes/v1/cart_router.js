
const express = require("express");
const { updateCart } = require("../../controllers/cart_controller");
const { isLogedIn } = require("../../middlewares/auth_middleware");
const cartRouter = express.Router()



cartRouter.patch("/:id", [isLogedIn],  updateCart)

module.exports = cartRouter;