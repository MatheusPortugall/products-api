const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Category