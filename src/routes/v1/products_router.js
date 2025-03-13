
const express = require("express");
const { getproductController, createProduct } = require("../../controllers/products_controller");
const { createProductValidator } = require("../../middlewares/product_milddleware");
const productsRouter = express.Router()



productsRouter.get("/", getproductController)
productsRouter.post("/", [createProductValidator], createProduct)

module.exports = productsRouter;