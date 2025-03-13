
const express = require("express");
const { productController, createProduct } = require("../../controllers/products_controller");
const { createProductValidator } = require("../../middlewares/product_milddleware");
const productsRouter = express.Router()



productsRouter.get("/", productController)
productsRouter.post("/", [createProductValidator], createProduct)

module.exports = productsRouter;