
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async createProduct(product) {
        console.log("create product called from service laryer", product)
       let newProduct = await this.repository.createProduct(product)
       return newProduct;
    }
    
    async getProducts() {
        const data = await this.repository.getProducts();
        // console.log("data from service laryer", data)
        return data;
    }
    
    async getProduct(id) {
        const singleItem = await this.repository.getProduct(id)
        return singleItem;
    }
}


module.exports = ProductService;