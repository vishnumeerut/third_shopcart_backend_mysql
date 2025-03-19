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
    
    async getProducts() {
        try{
            const data = await this.repository.getProducts();
            return data;
        }
        catch(error){
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
            let data = await this.repository.updateCategory(id, title, price, description, image, categoryId)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
}


module.exports = ProductService;