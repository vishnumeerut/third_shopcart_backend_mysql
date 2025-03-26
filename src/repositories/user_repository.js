const User = require("../models/user")

class UserRepository {

    async createUser (username, email, password) {

        try{
            const response = await User.create({
                username, email, password
            });
            return response;
        }
        catch(error){
            console.log("Error inside User Repository during createUser...", error)
            throw error;
        }

    }

}






module.exports = UserRepository;