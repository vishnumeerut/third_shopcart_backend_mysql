const express = require("express");

const v1Router = express.Router()
const pingRouter = require("../v1/pingRoute");
const productsRouter = require("./productsRoute");

v1Router.use("/ping", pingRouter)
v1Router.use("/products", productsRouter)


module.exports = v1Router;