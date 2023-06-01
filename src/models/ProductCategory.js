const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const ProductCategory = sequelize.define('ProductCategory', {
    product: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    category: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
  });
  
  module.exports = ProductCategory;