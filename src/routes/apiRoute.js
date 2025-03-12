
const express = require("express")

const apiRouter = express.Router();
const v1Router = require("./v1/v1Router");
const v2Router = require("./v2/v2Router");



apiRouter.use("/v1", v1Router)
apiRouter.use("/v2", v2Router)


module.exports = apiRouter;