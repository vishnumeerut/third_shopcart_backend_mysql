
const express = require("express");
const { productController } = require("../../controllers/products_controller");
const productsRouter = express.Router()



productsRouter.get("/", productController)

module.exports = productsRouter;