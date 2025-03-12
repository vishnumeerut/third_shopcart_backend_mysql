const { pingControllerv2 } = require("../../controllers/pingController")
const express = require("express");
const pingRoutev2 = express.Router()



pingRoutev2.get("/", pingControllerv2)





module.exports = pingRoutev2;