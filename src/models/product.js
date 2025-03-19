const Sequelize = require("sequelize");
const db = require("../config/db_config");
const Category = require("./category");


const Product = db.define("product",
  {
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Category, // Foreign key reference
            key: "id",
        }
    }

});



module.exports = Product;
