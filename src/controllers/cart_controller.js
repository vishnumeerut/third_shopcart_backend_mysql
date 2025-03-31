const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const errorResponse = require("../utils/error_response");
const CartService = require("../services/cart_service");
const CartRepository = require("../repositories/cart_repository");


const cartService = new CartService(new CartRepository())


async function updateCart(req, res) {

    try{
        const shouldAddProduct = (req.body.shouldAddProduct === true || req.body.shouldAddProduct === "true") ? true : false;
        const newCategory = await cartService.updateCart(req.user.id, req.params.id,  req.body.productId, shouldAddProduct)

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Updated Cart Successfully... " ,
            data: newCategory,
        })
    }
    catch(error) {
        console.log("Cart Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}


async function getCartProducts(req, res) {

    try{
        console.log("contoller called with cart id:-", req.params.id, "user id:-", req.user.id)
        const data = await cartService.getCartProducts(req.params.id, req.user.id);

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Get Cart Product Successfully... " ,
            data: data,
        })
    }
    catch(error) {
        console.log("Cart Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}
async function clearCart(req, res) {

    try{
        const data = await cartService.clearCart(req.params.id, req.user.id);

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Update Cart Successfully... " ,
            data: data,
        })
    }
    catch(error) {
        console.log("Cart Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}



module.exports = {
    updateCart,
    getCartProducts,
    clearCart,
}