const express = require('express');
const verifyToken = require('../utils/auth');
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
	res.send({
		"msg" : "hello world"
	})
})

module.exports = router;

