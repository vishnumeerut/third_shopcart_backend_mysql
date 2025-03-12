const { pingControllerv2 } = require("../../controllers/ping_controller")
const express = require("express");
const pingRoutev2 = express.Router()



pingRoutev2.get("/", pingControllerv2)





module.exports = pingRoutev2;