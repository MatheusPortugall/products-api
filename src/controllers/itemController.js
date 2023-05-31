const items = [
    {
        "id": "5bda0610-0005-11ee-be56-0242ac120002",
        "title": "Camisa azul",
        "price": {
            "currency": "BRL",
            "amount": 25.99,
            "decimals": 10.2
        },
        "picture": "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg",
        "condition": "condition x",
        "free_shipping": true
    },
    {
        "id": "601166f6-0005-11ee-be56-0242ac120002",
        "title": "Sapato rosa",
        "price": {
            "currency": "BRL",
            "amount": 289.90,
            "decimals": 10.2
        },
        "picture": "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg",
        "condition": "condition y",
        "free_shipping": true
    }
]
const item = {
    "author": {
        "name": "Matheus",
        "lastname": "Ribeiro"
    },
    "item": 
        {
            "id": "5bda0610-0005-11ee-be56-0242ac120002",
            "title": "Camisa azul",
            "price": {
                "currency": "BRL",
                "amount": 25.99,
                "decimals": 10.2
            },
            "picture": "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg",
            "condition": "condition x",
            "free_shipping": true,
            "sold_quantity": 50,
            "description": "descricao produto"
        }
}

const getItemsSearch = async (req, res) => {
    try {
        const response = {
        "author": {
            "name": "Matheus",
            "lastname": "Ribeiro"
        },
        "categories": ['Camisas', 'Masculina'],
        "items": items
        }
        res.json(response)
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
        res.json(response)
    } catch (err) {
        console.error('Erro get item', err)
        res.status(500).json({ error: 'Error get item' })
    }
}

module.exports = { getItemsSearch, getItemsSearchForId };