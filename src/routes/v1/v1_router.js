const express = require("express");

const v1Router = express.Router()
const pingRouter = require("./ping_router");
const productsRouter = require("./products_router");

v1Router.use("/ping", pingRouter)
v1Router.use("/products", productsRouter)


module.exports = v1Router;