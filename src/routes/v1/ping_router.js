const { pingController } = require("../../controllers/ping_controller")
const express = require("express");
const router = express.Router()

// middleware 

function checkDetails (req, res, next) {
    console.log("Checking details done..")
    next();
    console.log("Ending check details..")
}

function logger(req, res, next) {
    console.log("Logging details done...")
    next();
    console.log("Ending logger details..")

}

function auth(req, res, next) {
    console.log("Authentication done!...")
    next();
    console.log("Ending auth details..")

}

router.get("/",  pingController)

module.exports = router;