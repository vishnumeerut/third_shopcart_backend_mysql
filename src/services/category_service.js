const InternalServerError = require("../errors/inernal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async createCategory(data) {
        try{
            let newProduct = await this.repository.createCategory(data.name, data.description)
            return newProduct;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async getCategories() {
        try{
            let data = await this.repository.getCategories()
            console.log("all categories are..", data)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async getCategory(id) {
        try{
            let data = await this.repository.getCategory(id)
            console.log("category service.. data is", data)
            if(!data){
                console.log("implement not found error here")
                throw new NotFoundError("Category", "id", id)
            }
            return data;
        }
        catch(error){
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async deleteCategory(id) {
        try{
            let data = await this.repository.deleteCategory(id)
            if(!data) {
                throw new NotFoundError("Category", "id", id)
            }
            return data;
        }
        catch(error){
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async updateCategory(id, updatedata) {
        try{
            let data = await this.repository.updateCategory(id, updatedata.name, updatedata.description)
            console.log("data is updating category..", data)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    

    

}


module.exports = CategoryService;