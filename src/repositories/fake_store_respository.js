const { default: axios } = require("axios")

async function getProducts () {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log("response from repository",response.data)
    return response.data
}

module.exports = {
    getProducts,
}