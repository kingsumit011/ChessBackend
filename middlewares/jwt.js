/* eslint-disable linebreak-style */
//USE FOR SECURITY
const jwt = require("express-jwt");
const secret = process.env.JWT_SECRET;

const authenticate = jwt({
	secret: secret,
	algorithms:["RS256"]

});

module.exports = authenticate;