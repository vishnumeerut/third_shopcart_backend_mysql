
const Category = require("../models/category")
class CategoryRepository {
    async getCategories () {
        const response = await Category.findAll();
        return response;
    }
    async getCategory (id) {
        const response = Category.findByPk(id);
        return response;
    }

    async createCategory (name, description){

        const response = await Category.create({
            name, description,
        });
        return response;
    }
}


module.exports = CategoryRepository;