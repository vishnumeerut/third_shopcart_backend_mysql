const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const ProductService = require("../services/product_service");
const ProductRespository = require("../repositories/product_repository")

const productService = new ProductService(new ProductRespository())
async function createProduct(req, res) {
    const {title, description, price, image, categoryId} = req.body;
    try{

        console.log("controller called..", title, description, price, image, categoryId)
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
        console.log("Error caught during product creation..", error)
    }
}
async function getproductController(req, res) {
    const allProducts = await productService.getProducts()
    res.status(StatusCodes.OK).send({
        success:true,
        error:{},
        message: "All Products fetch successfully",
        data: allProducts,
    })
}

async function getProduct(req, res) {
    const {id} = req.params;
    const singleProduct = await productService.getProduct(id)
    res.status(StatusCodes.OK).send({
        success:true,
        error:{},
        message: "Product fetch successfully",
        data: singleProduct,
    })
}
function productControllerv2(req, res) {
    res.send({message:"Ping request from V2..", products:[]})

}

module.exports = {
    createProduct,
    getproductController,
    productControllerv2,
    getProduct,
}