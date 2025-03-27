const { pingController } = require("../../controllers/ping_controller")
const express = require("express");
const { isLogedIn } = require("../../middlewares/auth_middleware");
const router = express.Router()

// middleware 



router.get("/", [isLogedIn],  pingController)

module.exports = router;