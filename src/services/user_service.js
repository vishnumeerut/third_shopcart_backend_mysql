
const BadRequest = require("../errors/bad_request_error");
const ConflictError = require("../errors/conflict_error");
const InternalServerError = require("../errors/inernal_server_error")
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

}



module.exports = UserService;