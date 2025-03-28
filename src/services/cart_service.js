const InternalServerError = require("../errors/inernal_server_error");

class CartService {
    constructor(repository) {
        this.repository = repository;
    }
    async updateCart (cartId, productId, shouldAddProduct=true) {
        try{
            let newProduct = await this.repository.updateCart(cartId, productId, shouldAddProduct);
            return newProduct;
        }
        catch(error){
            if(error.name === "NotFoundError"){
                throw error;
            }
            console.log("Category Service layer....", error);
            throw new InternalServerError()
        }

    }

    

    

}


module.exports = CartService;