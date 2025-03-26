const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const UserRepository = require("../repositories/user_repository")
const UserService = require("../services/user_service");
const errorResponse = require("../utils/error_response");

const userService = new UserService(new UserRepository());
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




module.exports = {
    createUser,
}