
const Sequelize = require("sequelize")
const db = require("../config/db_config")
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/server_config")


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
}, {
    hooks: {
        beforeCreate: function (user) {
            // const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(user.password, +SALT_ROUNDS); // convert SALT_ROUNDS INTO NUMBER
            user.password = hash;
        }
    }
})

module.exports = User;