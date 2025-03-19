
const express = require("express");
const { createCategory, getCategories, getCategory, deleteCategory, updateCategory, getProductsForCategory } = require("../../controllers/category_controller");
const { createCategoryValidator } = require("../../middlewares/category_middleware");
const categoryRouter = express.Router()



categoryRouter.post("/", [createCategoryValidator],  createCategory)
categoryRouter.get("/",  getCategories)
categoryRouter.get("/:id",  getCategory)
categoryRouter.get("/:id/products",  getProductsForCategory)
categoryRouter.delete("/:id",  deleteCategory)
categoryRouter.patch("/:id",  updateCategory)

module.exports = categoryRouter;