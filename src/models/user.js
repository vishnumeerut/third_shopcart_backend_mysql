
const Sequelize = require("sequelize")
const db = require("../config/db_config")


const User = db.define("user", {
    username:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,

    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }

    },
    password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[3, 20],
            isAlphanumeric:true,
        },
        

    }
})

module.exports = User;