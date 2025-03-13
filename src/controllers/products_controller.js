
function createProduct(req, res) {
    try{


        // db processsing...

        res.send({
            success:true,
            error:{},
            message:"Product created successfully..",
            data: {
                id: Math.random()*(20)+(1),
                title: "",
                description: "",
                category: "",
                price: "",
                image:"",
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