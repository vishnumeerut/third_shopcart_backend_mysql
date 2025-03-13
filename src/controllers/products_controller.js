const {StatusCodes, ReasonPhrases} = require("http-status-codes")
function createProduct(req, res) {
    const {title, description, category, price, image} = req.body;
    console.log(title, description, category, price, image)
    try{


        // db processsing...

        res.status(StatusCodes.CREATED).send({
            success:true,
            error:{},
            message: "Product " + ReasonPhrases.CREATED,
            data: {
                id: Math.random()*(20)+(1),
                title: title,
                description: description,
                category: category,
                price: price,
                image:image,
            }
        })
    }
    catch(error) {
        console.log("Error caught during product creation..", error)
    }
}
function productController(req, res) {
    res.send({message:"Ping request from V1..", products:[]})
}
function productControllerv2(req, res) {
    res.send({message:"Ping request from V2..", products:[]})
}

module.exports = {
    createProduct,
    productController,
    productControllerv2,
}