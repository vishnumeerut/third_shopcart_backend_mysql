const { StatusCodes, ReasonPhrases } = require("http-status-codes")
const errorResponse = require("../utils/error_response")
const UnauthorizedError = require("../errors/unauthorized_error")
const { verifyToken } = require("../utils/auth")


function isLogedIn(req, res, next) {

        // console.log("cookie is:->", req.cookies.token)
        if(!req.cookies || !req.cookies.token){
            return res.status(StatusCodes.UNAUTHORIZED).send(errorResponse(ReasonPhrases.UNAUTHORIZED, new UnauthorizedError()))
        }
        const {token} =  req.cookies;
        let decodeToken;
        try{
            decodeToken = verifyToken(token);
        }
        catch(error){
            return res.status(StatusCodes.UNAUTHORIZED).send(errorResponse(ReasonPhrases.UNAUTHORIZED, error))

        }

        // modify my request object;
        // console.log("decodetoken is:", decodeToken)


        req.user = {email:decodeToken.email, id: decodeToken.id}
        console.log("user is", req.user)


        next();
}

module.exports = {
    isLogedIn,
}