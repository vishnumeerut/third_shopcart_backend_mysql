
const Category = require("../models/category")
class CategoryRepository {
    async getCategories () {
        const response = await Category.findAll({
            attributes: ["name"],  // Select only the 'name' column
            raw: true,             // Returns plain JSON objects instead of Sequelize instances
          });
        return response;
    }
    async getCategory (id) {
        const response = Category.findByPk(id);
        console.log("response from db single category:", response)
        return response;
    }

    async createCategory (name, description){

        const response = await Category.create({
            name, description,
        });
        return response;
    }

    async deleteCategory (id) {
        const responose = await Category.destroy({
            where:{
                id:id,
            }
        })
        return responose;
    }

    async updateCategory(id, name, description) {
        const response = await Category.update({
            name:name,
            description:description,
        }, {
            where:{
                id:id
            }
        })
    }
}


module.exports = CategoryRepository;