
const Category = require("../models/category")
class CategoryRepository {
    async getCategories () {
        try{
            const response = await Category.findAll({
                attributes: ["name"],  // Select only the 'name' column
                raw: true,             // Returns plain JSON objects instead of Sequelize instances
              });
            return response;
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }
    async getCategory (id) {
        try{
            const response = Category.findByPk(id);
            console.log("response from db single category:", response)
            return response;
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }

    async createCategory (name, description){

        try{
            const response = await Category.create({
                name, description,
            });
            return response;
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }

    async deleteCategory (id) {
        try{
            const responose = await Category.destroy({
                where:{
                    id:id,
                }
            })
            return responose;
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }

    async updateCategory(id, name, description) {
        try{
            const response = await Category.update({
                name:name,
                description:description,
            }, {
                where:{
                    id:id
                }
            })
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }
}


module.exports = CategoryRepository;