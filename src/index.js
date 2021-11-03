const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT_NUMBER = 5000;

// cors middleware
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/test', require('./routes/TestRouter'))
app.use('/api', require('./routes/BrandsRouters'))
app.use('/api', require('./routes/CompaniesRouters'))
app.use('/api', require('./routes/ProductsRouters'))
app.use('/api/user', require('./routes/UserRouters'))

app.listen(PORT_NUMBER, () => console.log(`Listening http://localhost:${PORT_NUMBER}`))
