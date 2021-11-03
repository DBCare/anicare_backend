const express = require('express');
const router = express.Router()

// get all products
router.get('/products', (req, res) => {
	const data = {}
	res.status(200).send(data)
})

// get a product by id
router.get('/product/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// post a product
router.post('/product', (req, res) => {
	const { body } = req;
	console.log(req.body);
	res.status(201).send(body)
})

// update a product
router.put('/product/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// remove a product
router.delete('/product/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

module.exports = router