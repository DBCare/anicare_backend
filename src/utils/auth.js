const jwt = require("jsonwebtoken")
const config = process.env;

const verifyToken = (req, res, next) => {
	next()
}

module.exports = verifyToken

