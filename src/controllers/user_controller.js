const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const UserRepository = require("../repositories/user_repository")
const UserService = require("../services/user_service");
const errorResponse = require("../utils/error_response");
const { NODE_ENVIRONMENT } = require("../config/server_config");
const CartRepository = require("../repositories/cart_repository");

const userService = new UserService(new UserRepository(), new CartRepository());
async function createUser(req, res) {

    try{
        const newUser = await userService.createUser(req.body)

        res.status(StatusCodes.CREATED).send({
            success:true,
            error:{},
            message: "User " + ReasonPhrases.CREATED,
            data: newUser,
        })
    }
    catch(error) {
        console.log("Error inside User Controller during createUser...", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}
async function getUserByEmail(req, res) {

    try{
        const data = await userService.getUserByEmail(req.body)
        res.cookie("token", data,   { httpOnly:true, maxAge: 7 * 24 * 60 * 60 * 1000})

        res.status(StatusCodes.OK).send({
            success:true,
            error:{},
            message: "User " + ReasonPhrases.OK,
            data: (NODE_ENVIRONMENT === "production") ? true : data,
        })
    }
    catch(error) {
        console.log("Error inside User Controller during getUserByEmail...", error)
        res.status(error.statusCode).send(errorResponse(error.reason, error))
    }
}




module.exports = {
    createUser,
    getUserByEmail,
}