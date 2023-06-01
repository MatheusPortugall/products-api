const express = require('express')
const router = express.Router()
const { getItemsSearch, getItemsSearchForId } = require('../controllers/ProductController')

router.get('/', getItemsSearch)
router.get('/:id/description', getItemsSearchForId)
  
module.exports = router