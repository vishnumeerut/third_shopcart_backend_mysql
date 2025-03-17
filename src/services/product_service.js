
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    createProduct(product) {
        let newProduct = {
            id: products.length,
            ...product
        }
        products.push(newProduct);
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