
const express = require("express");
const { productControllerv2 } = require("../../controllers/productsController");
const productsRouterV2 = express.Router()



productsRouterV2.get("/", productControllerv2)

module.exports = productsRouterV2;