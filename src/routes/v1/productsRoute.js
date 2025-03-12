
const express = require("express");
const { productController } = require("../../controllers/productsController");
const productsRouter = express.Router()



productsRouter.get("/", productController)

module.exports = productsRouter;