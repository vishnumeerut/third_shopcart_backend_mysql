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


    async getCartProducts(cartId, userId) {
        try{
            console.log(` Inside service layer cart id: ${cartId} and userId: ${userId}`)
            const cart = await this.repository.getCart(cartId);
            console.log("cart value is:-", cart)
            if(!cart){
                throw new NotFoundError("Cart", "id", cartId);
            }

            console.log("condition ofr user and cart:-", cart.userId !== userId)
            if(cart.userId !== userId){
                throw new UnauthorizedError("You are not authorized to do the current operation..")
            }
            const response = await this.repository.getCartProducts(cartId);

            return response;
        }
        catch(error) {
            console.log("Cart Service layer....", error);
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError"){
                throw error;
            }
            throw new InternalServerError()
        }
    }

    

    

}


module.exports = CartService;