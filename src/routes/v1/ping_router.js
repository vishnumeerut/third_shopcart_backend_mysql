const { pingController } = require("../../controllers/ping_controller")
const express = require("express");
const router = express.Router()



router.get("/", pingController)

module.exports = router;