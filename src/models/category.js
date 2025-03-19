const Sequelize = require("sequelize");
const db = require("../config/db_config");
const Category = db.define("category",
  {
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },

);

module.exports = Category;
