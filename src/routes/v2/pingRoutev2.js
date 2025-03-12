const { pingControllerv2 } = require("../../controllers/pingController")
const express = require("express");
const router = express.Router()



router.get("/ping", pingControllerv2)





module.exports = router;