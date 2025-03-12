
const express = require("express")

const apiRouter = express.Router();
const pingRoutes = require("../routes/v1/pingRoute")
const pingRoutesv2 = require("../routes/v2/pingRoutev2")

apiRouter.use("/v1", pingRoutes)
apiRouter.use("/v2", pingRoutesv2)


module.exports = apiRouter;