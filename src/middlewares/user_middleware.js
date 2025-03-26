

const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const errorResponse = require("../utils/error_response");
const BadRequest = require("../errors/bad_request_error");

function createUserValidator(req, res, next) {
    const {username, email, password} = req.body;

    if(!username) {
       return res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("username")))
    }
    if(!email) {
       return  res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("email")))
    }
    if(!password) {
       return  res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("password")))
    }


    // If Everything is Good then call next()
    next()
}

function signinUserValidator(req, res, next) {
    const {email, password} = req.body;

    if(!email) {
       return  res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("email")))
    }
    if(!password) {
       return  res.status(StatusCodes.BAD_REQUEST).send(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("password")))
    }


    // If Everything is Good then call next()
    next()
}

module.exports = {
    createUserValidator,
    signinUserValidator,
}