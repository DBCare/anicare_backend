const express = require("express")
const router = express.router()

router.post('/login', (req, res) => {
	res.status(201).send({})
})

router.post('/signup', (req, res) => {
	res.status(201).send({})
})

module.exports = router
