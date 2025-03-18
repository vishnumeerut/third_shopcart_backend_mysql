
const express = require("express");
const { createCategory, getCategories, getCategory, deleteCategory, updateCategory } = require("../../controllers/category_controller");
const { createCategoryValidator } = require("../../middlewares/category_middleware");
const categoryRouter = express.Router()



categoryRouter.post("/", [createCategoryValidator],  createCategory)
categoryRouter.get("/",  getCategories)
categoryRouter.get("/:id",  getCategory)
categoryRouter.delete("/:id",  deleteCategory)
categoryRouter.patch("/:id",  updateCategory)

module.exports = categoryRouter;