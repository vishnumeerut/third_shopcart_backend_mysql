
const express = require("express");
const { createCategory, getCategories, getCategory } = require("../../controllers/category_controller");
const categoryRouter = express.Router()



categoryRouter.post("/",  createCategory)
categoryRouter.get("/",  getCategories)
categoryRouter.get("/:id",  getCategory)

module.exports = categoryRouter;