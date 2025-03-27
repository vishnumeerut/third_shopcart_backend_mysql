const jwt = require("jsonwebtoken");
const { SECRECT_KEY } = require("../config/server_config");


function generateJwtToken(payload){
    const token  = jwt.sign(payload,  SECRECT_KEY, {expiresIn: '1h'})
    return token;
}

function verifyToken(token){
    return jwt.verify(token, SECRECT_KEY)
}

// const token = generateJwtToken({email:"admin@gmail.com", password: "123"}, SECRECT_KEY, {expiresIn:'1h'})
// console.log(token)

// const v = verifyToken("yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNzQzMDcxMjM4LCJleHAiOjE3NDMwNzQ4Mzh9.t1cYeoAYXcJTWN57oLMVk71HrfCLo0x983ovTkFLJg4")
// console.log(v)
module.exports = {
    generateJwtToken,
}