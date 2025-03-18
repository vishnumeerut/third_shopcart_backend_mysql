const express = require("express");

const v1Router = express.Router()
const pingRouter = require("./ping_router");
const productsRouter = require("./products_router");
const categoryRouter = require("./category_router")

v1Router.use("/ping", pingRouter)
v1Router.use("/products", productsRouter)
v1Router.use("/categories", categoryRouter)


module.exports = v1Router;