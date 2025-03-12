
function productController(req, res) {
    res.send({message:"Ping request from V1..", products:[]})
}
function productControllerv2(req, res) {
    res.send({message:"Ping request from V2..", products:[]})
}

module.exports = {
    productController,
    productControllerv2,
}