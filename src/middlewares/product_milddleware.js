const BadRequest = require("../errors/bad_request_error")
const errorResponse = require("../utils/error_response")

function createProductValidator(req, res, next) {

    if(!req.body.title) {
        res.status(400).send(errorResponse("Desc is not present in incoming request", new BadRequest("Title")))
    }
    if(!req.body.description) {
        res.status(400).send(errorResponse("Desc is not present in incoming request", new BadRequest("Description")))
    }
    if(!req.body.category) {
        res.status(400).send(errorResponse("Desc is not present in incoming request", new BadRequest("Category")))
    }
    if(!req.body.price) {
        res.status(400).send(errorResponse("Desc is not present in incoming request", new BadRequest("Price")))
    }
    if(!req.body.image) {
        res.status(400).send(errorResponse("Desc is not present in incoming request", new BadRequest("Image")))
    }

    // if everything is good 
    next()
}

module.exports = {
    createProductValidator
}