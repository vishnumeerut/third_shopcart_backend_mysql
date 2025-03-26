

const express = require("express");
const { createUser, getUserByEmail } = require("../../controllers/user_controller");
const { createUserValidator, signinUserValidator } = require("../../middlewares/user_middleware");

const userRouter = express.Router();


userRouter.post("/signup", [createUserValidator],  createUser);
userRouter.post("/signin", [signinUserValidator],  getUserByEmail);




module.exports = userRouter;