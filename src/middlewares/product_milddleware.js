const BadRequest = require("../errors/bad_request_error")
const errorResponse = require("../utils/error_response")
const {StatusCodes, ReasonPhrases} = require("http-status-codes")
function createProductValidator(req, res, next) {

    if(!req.body.title) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Title")))
    }
    if(!req.body.description) {
        res.status(400).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Description")))
    }
    if(!req.body.category) {
        res.status(400).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Category")))
    }
    if(!req.body.price) {
        res.status(400).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Price")))
    }
    if(!req.body.image) {
        res.status(400).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Image")))
    }

    // If Everything is Good then call next()
    next()
}

module.exports = {
    createProductValidator
}