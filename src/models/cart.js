const Sequelize = require("sequelize");
const db = require("../config/db_config");


const Cart = db.define("cart", {

    userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:"users", // table name of User Model
            key: "id"
        }
    }


});

module.exports = Cart;
