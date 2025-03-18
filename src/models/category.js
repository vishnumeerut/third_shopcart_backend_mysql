
const Sequelize = require('sequelize')
const db = require("../config/db_config")
const Category = db.define("category", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Category;