
const express = require("express");
const { createProduct, getProduct, getProducts, deleteProduct } = require("../../controllers/products_controller");
const { createProductValidator } = require("../../middlewares/product_milddleware");
const productsRouter = express.Router()



productsRouter.get("/", getProducts)
productsRouter.get("/:id", getProduct)
productsRouter.delete("/:id", deleteProduct)
productsRouter.post("/", [createProductValidator], createProduct)

module.exports = productsRouter;