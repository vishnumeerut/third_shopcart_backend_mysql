const BadRequest = require("../errors/bad_request_error")
const errorResponse = require("../utils/error_response")
const {StatusCodes, ReasonPhrases} = require("http-status-codes")
function createProductValidator(req, res, next) {
    const {title, description, price, image, categoryId} = req.body;
    console.log("log the data from validation layer..", title, description, price, image, categoryId)
    if(!req.body.title) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Title")))
    }
    if(!req.body.description) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Description")))
    }
    if(!req.body.price) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Price")))
    }
    if(!req.body.image) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Image")))
    }
    if(!req.body.categoryId) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("categoryId")))
    }

    // If Everything is Good then call next()
    next()
}

module.exports = {
    createProductValidator
}