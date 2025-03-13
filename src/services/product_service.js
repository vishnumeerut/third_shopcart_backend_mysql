
let products = [];

function createProduct(product) {
    let newProduct = {
        id: products.length,
        ...product
    }
    products.push(newProduct);
    return newProduct;
}

function getProducts(req, res) {
    return products;
}

module.exports = {
    createProduct,
    getProducts,
}