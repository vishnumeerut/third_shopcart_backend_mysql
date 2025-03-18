const Sequelize = require("sequelize");
const db = require("../config/db_config");
const Category = db.define(
  "category",
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
  {
    indexes: [
      {
        unique: true,
        fields: ["name"], // Prevent Sequelize from adding multiple indexes
      },
    ],
  }
);

module.exports = Category;
