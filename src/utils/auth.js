const jwt = require("jsonwebtoken");
const { SECRECT_KEY } = require("../config/server_config");


function generateJwtToken(payload){
    const token  = jwt.sign(payload,  SECRECT_KEY, {expiresIn: '1h'})
    return token;
}

module.exports = {
    generateJwtToken,
}