const BadRequest = require("../errors/bad_request_error");
const InternalServerError = require("../errors/inernal_server_error");
const NotFoundError = require("../errors/not_found_error");
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async createProduct(productDetails) {
        try{
            const {title, description, price, image, categoryId} = productDetails;
            let newProduct = await this.repository.createProduct(title, description, price, image, categoryId)
            return newProduct;
        }
        catch(error){
            console.log("Product Service layer....", error)
            throw new InternalServerError()
        }

    }
    
    async getProducts(query) {

        try{
            if((query.limit && isNaN(+query.limit)) || (query.offset && isNaN(+query.offset))){
                throw new BadRequest("limit or offset", true)
            }
            if(query.min_price && isNaN(+query.min_price)){
                throw new BadRequest("Min Price", true)
            }
            if(query.max_price && isNaN(+query.max_price)){
                throw new BadRequest("Max Price", true)
            }
            const data = await this.repository.getProducts(+query.limit, +query.offset, +query.min_price, +query.max_price);
            return data;
        }
        catch(error){
            if(error.name === "BadRequest"){
                throw error;
            }
            console.log("Product Service layer....", error)
            throw new InternalServerError()
        }

    }
    
    async getProduct(id) {
        try{
            const data = await this.repository.getProduct(id)
            console.log("Product service.. data is", data)
            if(!data){
                throw new NotFoundError("Product", "id", id)
            }
            return data;
        }
        catch(error){
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("Product Service layer....", error)
            throw new InternalServerError()
        }

    }

    async deleteProduct(id) {
        try{
            const data = await this.repository.deleteProduct(id)
            console.log("Product service.. data is", data)
            if(!data){
                throw new NotFoundError("Product", "id", id)
            }
            return data;
        }
        catch(error){
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("Product Service layer....", error)
            throw new InternalServerError()
        }
    }

    async updateProduct(id, updatedata) {
        const {title, price, description, image, categoryId} = updatedata;
        try{
            let data = await this.repository.updateProduct(id, title, price, description, image, categoryId)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }

}


module.exports = ProductService;