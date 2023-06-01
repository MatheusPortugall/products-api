const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Price = require('./Price')

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  free_shipping: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  sold_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Product.belongsTo(Price, { foreignKey: 'priceId' })

module.exports = Product