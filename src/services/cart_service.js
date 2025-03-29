const InternalServerError = require("../errors/inernal_server_error");
const NotFoundError = require("../errors/not_found_error");
const UnauthorizedError = require("../errors/unauthorized_error");
class CartService {
    constructor(repository) {
        this.repository = repository;
    }
    async updateCart (userId, cartId, productId, shouldAddProduct=true) {
        try{
            const cart = await this.repository.getCart(cartId);
            if(!cart){
                throw new NotFoundError("Cart", "id", cartId);
            }
            if(cart.userId !== userId){
                throw new UnauthorizedError("You are not authorized to do the current operation..")
            }
            let newProduct = await this.repository.updateCart(cartId, productId, shouldAddProduct);
            return newProduct;
        }
        catch(error){
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError"){
                throw error;
            }
            console.log("Category Service layer....", error);
            throw new InternalServerError()
        }

    }

    

    

}


module.exports = CartService;