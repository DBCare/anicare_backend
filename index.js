const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT_NUMBER = 5000;

// cors middleware
app.use(cors())

// body-parser middleware
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Routes
app.use(require('./routes/TestRouter'))


app.listen(PORT_NUMBER, () => console.log(`Listening http://localhost:${PORT_NUMBER}`))

