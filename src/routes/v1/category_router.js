
const express = require("express");
const { createCategory, getCategories, getCategory, deleteCategory } = require("../../controllers/category_controller");
const categoryRouter = express.Router()



categoryRouter.post("/",  createCategory)
categoryRouter.get("/",  getCategories)
categoryRouter.get("/:id",  getCategory)
categoryRouter.delete("/:id",  deleteCategory)

module.exports = categoryRouter;