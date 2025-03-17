const FakeStorapi = require("../repositories/fake_store_respository")
let products = [];

const repository = FakeStorapi;
function createProduct(product) {
    let newProduct = {
        id: products.length,
        ...product
    }
    products.push(newProduct);
    return newProduct;
}

async function getProducts() {
    const data = await repository.getProducts();
    // console.log("data from service laryer", data)
    return data;
}

function getProduct(id) {
    const singleItem =  products[id-1]
    return singleItem
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
}