
class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async createCategory(data) {
       let newProduct = await this.repository.createCategory(data.name, data.description)
       return newProduct;
    }
    async getCategories() {
       let data = await this.repository.getCategories()
       return data;
    }
    async getCategory(id) {
       let data = await this.repository.getCategory(id)
       return data;
    }
    

}


module.exports = CategoryService;