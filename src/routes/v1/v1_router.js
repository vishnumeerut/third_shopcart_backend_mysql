const express = require("express");

const v1Router = express.Router()
const pingRouter = require("./ping_router");
const productsRouter = require("./products_router");
const categoryRouter = require("./category_router");
const userRouter = require("./user_router");

v1Router.use("/ping", pingRouter)
v1Router.use("/products", productsRouter)
v1Router.use("/categories", categoryRouter)
v1Router.use("/users", userRouter)


module.exports = v1Router;