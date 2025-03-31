
const NotFoundError = require("../errors/not_found_error");
const Cart = require("../models/cart")
const CartProduct = require("../models/cart_product")
const {Op} = require("sequelize");
class CartRepository {

    async createCart (userId){

        try{
            const response = await Cart.create({
                userId,
            });
            return response;
        }
        catch(error){
            console.log("Cart Respository...", error)
            throw error;
        }

    }
    async getCarts () {
        try{
            const response = await Cart.findAll();
            return response;
        }
        catch(error){
            console.log("Cart Respository...", error)
            throw error;
        }

    }
    async getCart (id) {
        try{
            const response = Cart.findByPk(id);
            return response;
        }
        catch(error){
            console.log("Cart Respository...", error)
            throw error;
        }

    }

    async getCartProducts(cartId) {
        try{
            const response = await CartProduct.findAll({
                where: {
                    id:cartId
                }
            })
            return response;
        }
        catch(error){
            console.log("Cart Respository...", error)
            throw error;
        }
    }



    async deleteCart (id) {
        try{
            const responose = await Cart.destroy({
                where:{
                    id:id,
                }
            })
            return responose;
        }
        catch(error){
            console.log("Cart Respository...", error)
            throw error;
        }

    }

    async updateCart(cartId, productId, shouldAddProduct = true) {
        try{

            const result = await CartProduct.findOne({
                where: { 
                    [Op.and] : [
                        {cartId:cartId},
                        {productId:productId}
                    ]
                }
            })
            if(shouldAddProduct){
                // we want to add product to a cart
                if(!result){
                    // the product was not added to the cart
                    await CartProduct.create({
                        cartId, productId,
                    })
                }
                else {
                    // the product is present, we want to increament the quanitity;
                    await result.increment({quantity:1});
                }
            }
            else {
                // we want to remove produdt from cart;
                if(!result){
                    throw new NotFoundError("Cart Product", "product", productId)
                }
                if(result.quantity === 1) {
                    await CartProduct.destroy({
                        where: { 
                            [Op.and] : [
                                {cartId:cartId},
                                {productId:productId}
                            ]
                        }
                    })
                }
                else {
                    await result.increment({quantity:-1})
                }
            }

            const response = await CartProduct.findAll({
                where: {
                    cartId:cartId,
                }
            })
            return {
                cartId: cartId,
                products:response,
            }
        }
        catch(error){
            console.log("Category Respository...", error)
            throw error;
        }

    }
}


module.exports = CartRepository;