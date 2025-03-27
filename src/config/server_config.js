const dotenv = require('dotenv')

dotenv.config();


module.exports = {
    PORT: process.env.PORT || 3030,
    DB_NAME:process.env.DB_NAME,
    DB_PASS:process.env.DB_PASS,
    DB_USER:process.env.DB_USER,
    DB_URL:process.env.DB_URL,
    DB_ALTER:process.env.DB_ALTER,
    DB_FORCE:process.env.DB_FORCE,
    SALT_ROUNDS:process.env.SALT_ROUNDS,
    SECRECT_KEY:process.env.SECRECT_KEY,

}