
const express = require("express")

const apiRouter = express.Router();
const v1Router = require("./v1/v1_router");
const v2Router = require("./v2/v2_router");



apiRouter.use("/v1", v1Router)
apiRouter.use("/v2", v2Router)


module.exports = apiRouter;