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

    async createProduct (data){

        // console.log("data is for creating product from repository layer...", data)
        const response = await axios.post("https://fakestoreapi.com/products", data);
        // console.log("response of creation product from fake store repository layer", response)
        return response.data;
    }
}


module.exports = FakeStoreRepository;