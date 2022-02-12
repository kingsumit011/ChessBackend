/* eslint-disable linebreak-style */
const jwt = require("express-jwt");
const secret = process.env.JWT_SECRET;
//expressJwt({ secret:  process.env.JWT_SECRET, algorithms: ['RS256'] });

const authenticate = jwt({
	secret: secret,
	algorithms:["RS256"]

});

module.exports = authenticate;