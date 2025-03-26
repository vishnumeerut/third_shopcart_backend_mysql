

const express = require("express");
const { createUser } = require("../../controllers/user_controller");
const { createUserValidator } = require("../../middlewares/user_middleware");

const userRouter = express.Router();


userRouter.post("/signup", [createUserValidator],  createUser);




module.exports = userRouter;