const FakeStorapi = require("../repositories/fake_store_respository")
let products = [];

const repository = FakeStorapi;

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
    
    getProduct(id) {
        const singleItem =  this.repository.products[id-1]
        return singleItem
    }
}


module.exports = ProductService;