
const Category = require("../models/category")
class CategoryRepository {

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
    async getCategories () {
        try{
            const response = await Category.findAll();
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