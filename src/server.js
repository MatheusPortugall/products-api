const express = require('express')
const cors = require('cors')
const itemRoutes = require('./routes/routes')
const app = express()
const port = 8080;
const sequelize = require('./db')
const Category = require('./models/Category')
const Price = require('./models/Price')
const Product = require('./models/Product')
const ProductCategory = require('./models/ProductCategory')

async function connectToDatabase() {
  try {
    // Category.belongsToMany(Product, { through: ProductCategory })
    // Product.belongsToMany(Category, { through: ProductCategory })
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');

    await sequelize.sync(); // Cria as tabelas no banco de dados

    // Resto do código do aplicativo
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
}

connectToDatabase();

app.use(cors())

app.use('/api/items', itemRoutes)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})