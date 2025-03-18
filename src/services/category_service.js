
class CategoryService {
    constructor(repository) {
        this.repository = repository;
    }
    async createCategory(data) {
       let newProduct = await this.repository.createCategory(data.name, data.description)
       return newProduct;
    }
    

}


module.exports = CategoryService;