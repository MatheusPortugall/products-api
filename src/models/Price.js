const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Price = sequelize.define('Price', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  decimals: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})

module.exports = Price