const { default: axios } = require("axios")


class FakeStoreRepository {
    async getProducts () {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }
}


module.exports = FakeStoreRepository;