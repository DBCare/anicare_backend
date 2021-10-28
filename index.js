const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const functions = require("firebase-functions");
const mysql = require('mysql');
const PORT_NUMBER = 5000;

require('dotenv').config()

const pool = mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: process.env.DB_SOCKET_PATH,
});


exports.getBrands = functions.https.onRequest(async (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * FROM System.brands;', (err, rows) => {
            connection.release();
            if(err) throw err;
            res.send(rows);
        });
    });
});


// cors middleware
app.use(cors())

// body-parser middleware
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Routes
app.use(require('./routes/TestRouter'))


app.listen(PORT_NUMBER, () => console.log(`Listening http://localhost:${PORT_NUMBER}`))

