const Sequelize = require('sequelize');

const sequelize = new Sequelize('root', 'admin', 'admin', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
})

module.exports = sequelize;