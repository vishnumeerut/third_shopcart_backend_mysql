
const Category = require("../models/category")
class CategoryRepository {
    async getCategories () {
        console.log("repository called..")
        const response = await Category.findAll();
        console.log("data from repository...", response)
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