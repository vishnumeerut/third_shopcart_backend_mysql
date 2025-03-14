
const express = require("express");
const { getproductController, createProduct, getProduct } = require("../../controllers/products_controller");
const { createProductValidator } = require("../../middlewares/product_milddleware");
const productsRouter = express.Router()



productsRouter.get("/", getproductController)
productsRouter.get("/:id", getProduct)
productsRouter.post("/", [createProductValidator], createProduct)

module.exports = productsRouter;