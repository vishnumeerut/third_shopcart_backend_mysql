
const BadRequest = require("../errors/bad_request_error");
const ConflictError = require("../errors/conflict_error");
const InternalServerError = require("../errors/inernal_server_error");
const NotFoundError = require("../errors/not_found_error");
const bcrypt = require("bcrypt");
const UnauthorizedError = require("../errors/unauthorized_error");
const jwt = require("jsonwebtoken");
const { SECRECT_KEY } = require("../config/server_config");
const { generateJwtToken } = require("../utils/auth");
class UserService {
    constructor(repository){
        this.repository = repository;
    }

    async createUser(userDetails){
        try{
            const {username, email, password} = userDetails;
            const response = await this.repository.createUser(username, email, password);
            return response;
        }
        catch(error){
            console.log("Error inside User Service during createUser...", error)
            if(error.name === "SequelizeUniqueConstraintError"){
                throw new ConflictError(error.errors[0].message, true)
            }
            if(error.name === "SequelizeValidationError"){
                let reason = [];
                error.errors.forEach((err) => {
                    reason.push(err.path)
                })
                throw new BadRequest(`${reason} validation Failed`, true)
            }
            throw new InternalServerError()
            
        }
    }

    async getUserByEmail (userDetails) {
        try{
            const {email, password} = userDetails;
            const user = await this.repository.getUserByEmail(email);
            if(!user){
                throw new NotFoundError("User", "email", email)
            }
            const doesPasswordMatch = bcrypt.compareSync(password, user.password);
            if(!doesPasswordMatch){
                throw new UnauthorizedError()
            }
            // const token = jwt.sign({id:user.id, name:user.username, password:user.password}, SECRECT_KEY)
            // console.log("token is:-", token)
            return generateJwtToken({id:user.id, name:user.username, email:user.email});
        }
        catch(error){
            console.log("Error inside User Service during getUserByEmail...", error)
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError"){
                throw error;
            }
            throw new InternalServerError()

        }
    }

}



module.exports = UserService;