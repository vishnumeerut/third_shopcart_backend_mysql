
const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const errorResponse = require("../utils/error_response");
const BadRequest = require("../errors/bad_request_error");
function createCategoryValidator(req, res, next) {

    if(!req.body.name) {
        res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Name")))
    }
    if(!req.body.description) {
        res.status(400).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Description")))
    }


    // If Everything is Good then call next()
    next()
}

module.exports = {
    createCategoryValidator,
}