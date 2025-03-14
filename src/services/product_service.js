
let products = [];

function createProduct(product) {
    let newProduct = {
        id: products.length,
        ...product
    }
    products.push(newProduct);
    return newProduct;
}

function getProducts() {
    return products;
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