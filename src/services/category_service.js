const InternalServerError = require("../errors/inernal_server_error");

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
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async deleteCategory(id) {
        try{
            let data = await this.repository.deleteCategory(id)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    async updateCategory(id, updatedata) {
        try{
            let data = await this.repository.updateCategory(id, updatedata.name, updatedata.description)
            return data;
        }
        catch(error){
            console.log("Category Service layer....", error)
            throw new InternalServerError()
        }

    }
    

}


module.exports = CategoryService;