const express = require("express");
const pingRoutev2 = require("./ping_router_v2");
const productsRouterV2 = require("./products_router_v2");

const v2Router = express.Router()


v2Router.use("/ping",  pingRoutev2)
v2Router.use("/products",  productsRouterV2)


module.exports = v2Router;