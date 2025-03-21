
const Product = require("../models/product")
class ProductRepository {

    async createProduct (title, description, price, image, categoryId){

        try{
            const response = await Product.create({
                title, description, price, image, categoryId
            });
            return response;
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }
    async getProducts (limit, offset) {
        let filter = {};
        if(limit) {
            filter.limit = limit;
        }
        if(offset){
            filter.offset = offset;
        }
        try{
            const response = await Product.findAll(filter);
            return response;
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }
    async getProduct (id) {
        try{
            const response = Product.findByPk(id);
            console.log("response from db single category:", response)
            return response;
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }



    async deleteProduct (id) {
        try{
            const responose = await Product.destroy({
                where:{
                    id:id,
                }
            })
            return responose;
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }

    async updateProduct(id, title, price, description, image, categoryId) {
        try{
            const response = await Product.update({
                title, price, description, image, categoryId
            }, {
                where:{
                    id:id
                }
            })
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }

    async getProductsForCategory(id) {
        try{
            const data = await Product.findAll({
                where: { 
                    categoryId: id
                },
            });
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }

}


module.exports = ProductRepository;