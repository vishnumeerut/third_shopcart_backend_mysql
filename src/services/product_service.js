
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async createProduct(productDetails) {
        const {title, description, price, image, categoryId} = productDetails;
        let newProduct = await this.repository.createProduct(title, description, price, image, categoryId)
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