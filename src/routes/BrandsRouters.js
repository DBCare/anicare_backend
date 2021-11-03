const express = require('express');
const router = express.Router()

// get all brands
router.get('/brands', (req, res) => {
	const data = {}
	res.status(200).send(data)
})

// get a brand by id
router.get('/brand/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// post a brand
router.post('/brand', (req, res) => {
	const { body } = req;
	console.log(req.body);
	res.status(201).send(body)
})

// update a brand
router.put('/brand/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// remove a brand
router.delete('/brand/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

module.exports = router
