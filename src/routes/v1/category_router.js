
const express = require("express");
const { createCategory } = require("../../controllers/category_controller");
const categoryRouter = express.Router()



categoryRouter.post("/",  createCategory)

module.exports = categoryRouter;