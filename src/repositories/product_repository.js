
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
    async getProducts () {
        try{
            const response = await Product.findAll();
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

    async updateProduct(id, name, description) {
        try{
            const response = await Product.update({
                name:name,
                description:description,
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
}


module.exports = ProductRepository;