const ProductListDTO = require("../dto/ProductListDTO")
const Price = require("../models/Price")
const Product = require("../models/Product")
const { Op } = require('sequelize')

const item = {
    id: "5bda0610-0005-11ee-be56-0242ac120002",
    title: "Camisa azul",
    price: {
        currency: "BRL",
        amount: 25.99,
        decimals: 10.2
    },
    picture: "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg",
    condition: "condition x",
    free_shipping: true,
    sold_quantity: 50,
    description: "descricao produto"
}

const getItemsSearch = async (req, res) => {
    try {
        const query = req.query.q
        if(query == null || query == ''){
            res.status(400).json({ message: "Parameter for search filter 'q' is mandatory" })
            return
        }
        let listProducts = []
        let idsProducts = []
        const products = await Product.findAll({
            include: [
                {
                  model: Price
                },
              ],
              where: {
                title: {
                    [Op.like]: `%${query}%`
                }
              },
            limit: 4
          })
        if(products.length > 0) {
            products.map((item) => {
                idsProducts.push(item.dataValues.id)
                listProducts.push(item.dataValues)
            })
        }
        
        const author = {
            name:  req.header('name'), 
            lastname: req.header('lastname'),
        }
        const response = new ProductListDTO(author, ['Blusas', 'Casa'], listProducts)
        const updatedData = {
            ...response,
            items: response.items.map(item => {
              const { Price, ...rest } = item;
              return {
                ...rest,
                price: Price
              };
            })
          };
        res.status(200).json(updatedData)
    } catch (err) {
        console.error('Erro get items', err)
        res.status(500).json({ error: 'Error get items' })
    }
}

const getItemsSearchForId = async (req, res) => {
    try {
        const response = {
        author: {
            name:  req.header('name'), 
            lastname: req.header('lastname'),
        },
        item: item,
        }
        res.status(200).json(response)
    } catch (err) {
        console.error('Erro get item', err)
        res.status(500).json({ error: 'Error get item' })
    }
}

module.exports = { getItemsSearch, getItemsSearchForId };