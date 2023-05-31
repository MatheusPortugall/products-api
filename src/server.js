const express = require('express')
const cors = require('cors')
const itemRoutes = require('./routes/itemRoutes')
const app = express()
const port = 8080;

app.use(cors())

app.use('/api/items', itemRoutes)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})