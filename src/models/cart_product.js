const Sequelize = require("sequelize");
const db = require("../config/db_config");
const Category = require("./category");


const CartProduct = db.define("cart_product",
  {
    cartId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:"Carts",
            key:"id",
        }
    },
    productId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:"Products",
            key:"id",
        }
 
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
    },

});



module.exports = CartProduct;
