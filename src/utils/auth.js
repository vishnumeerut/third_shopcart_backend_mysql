const jwt = require("jsonwebtoken");
const { SECRECT_KEY } = require("../config/server_config");
const UnauthorizedError = require("../errors/unauthorized_error");


function generateJwtToken(payload){
    const token  = jwt.sign(payload,  SECRECT_KEY, {expiresIn: '1h'})
    return token;
}

function verifyToken(token){
    try{
        return jwt.verify(token, SECRECT_KEY);
    }
    catch(error) {
        throw new UnauthorizedError();
    }
}


module.exports = {
    generateJwtToken,
    verifyToken,
}