const express = require('express');
const router = express.Router()

// get all companies
router.get('/companies', (req, res) => {
	const data = {}
	res.status(200).send(data)
})

// get a company by id
router.get('/company/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// post a company
router.post('/company', (req, res) => {
	const { body } = req;
	console.log(req.body);
	res.status(201).send(body)
})

// update a company
router.put('/company/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

// remove a company
router.delete('/company/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).send({
		id
	})
})

module.exports = router