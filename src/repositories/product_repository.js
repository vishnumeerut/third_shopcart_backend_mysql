
const Product = require("../models/product")
const {Op} = require("sequelize");
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
    async getProducts (limit, offset, min_price, max_price) {
        try{
            let filter = {};
            if(limit) {
                filter.limit = limit;
            }
            if(offset){
                filter.offset = offset;
            }
            const minPriceValue = (min_price) ? min_price : Number.MIN_SAFE_INTEGER;
            const maxPriceValue = (max_price) ? max_price : Number.MAX_SAFE_INTEGER;
            const priceQueryResult = await Product.findAll({
                where: {
                    price: {
                        [Op.between] : [minPriceValue, maxPriceValue]
                    }
                },
                ...filter,
            })
            return priceQueryResult;

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

    async searchQueryProduct (searchQuery) {
        try{
            const response = Product.findAll({
                where: {
                    title: {
                        [Op.like]: `%${searchQuery}%`
                    }
                }
            })
            return response;
        }
        catch(error){
            console.log("Product Respository...", error)
            throw error;
        }

    }

}


module.exports = ProductRepository;