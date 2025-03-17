const { default: axios } = require("axios")


class FakeStoreRepository {
    async getProducts () {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }
    async getProduct (id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log("response for single product", response.data)
        return response.data
    }
}


module.exports = FakeStoreRepository;