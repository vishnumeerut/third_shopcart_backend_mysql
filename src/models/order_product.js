const Sequelize = require("sequelize");
const db = require("../config/db_config");
const Product = require("./product")
const Order = require("./order")


const OrderProduct = db.define("order_product",
  {
    orderId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:Order,
            key:"id",
        }
    },
    productId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Product,
            key:"id",
        }
 
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
    },

});



module.exports = OrderProduct;
