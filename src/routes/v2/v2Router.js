const express = require("express");
const pingRoutev2 = require("./pingRoutev2");
const productsRouterV2 = require("./productsRoutev2");

const v2Router = express.Router()


v2Router.use("/ping",  pingRoutev2)
v2Router.use("/products",  productsRouterV2)


module.exports = v2Router;