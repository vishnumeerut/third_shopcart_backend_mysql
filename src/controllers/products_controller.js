const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const {ProductService} = require("../services/index");
const {ProductRepository} = require("../repositories/index");
const errorResponse = require("../utils/error_response");

const productService = new ProductService(new ProductRepository())
async function createProduct(req, res) {
    // const {title, description, price, image, categoryId} = req.body;
    try{

        const newProduct = await productService.createProduct(req.body)
        console.log("newProduct is", newProduct)

        res.status(StatusCodes.CREATED).send({
            success:true,
            error:{},
            message: "Product " + ReasonPhrases.CREATED,
            data: newProduct,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}
async function getProducts(req, res) {

    try{
        const allProducts = await productService.getProducts(req.query)
        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Products fetch successfully",
            data: allProducts,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
    
}

async function getProduct(req, res) {

    try{
        const {id} = req.params;
        const singleProduct = await productService.getProduct(id)
        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Product fetch successfully",
            data: singleProduct,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }

}

async function deleteProduct(req, res) {

    try{
        const {id} = req.params;
        const singleProduct = await productService.deleteProduct(id)
        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Product Delete successfully",
            data: singleProduct,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}

async function updateProduct(req, res) {

    try{
        const {id} = req.params;
        const singleProduct = await productService.updateProduct(id, req.body)
        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Product Update successfully",
            data: singleProduct,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}

async function searchQueryProduct(req, res) {

    try{
        const allProducts = await productService.searchQueryProduct(req.query)
        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "Product Fetch successfully",
            data: allProducts,
        })
    }
    catch(error) {
        console.log("Product Controller layer..", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}
function productControllerv2(req, res) {
    res.send({message:"Ping request from V2..", products:[]})

}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    productControllerv2,
    searchQueryProduct,
}