const { pingController } = require("../controllers/pingController")
const express = require("express");
const router = express.Router()

router.get("/", pingController)

module.exports = router;