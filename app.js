/* eslint-disable linebreak-style */
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");

// MONGO DB connection withn mongoose
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("Connected to %s", MONGODB_URL);
	console.log("App is running ... \n");
	console.log("Press CTRL + C to stop the process. \n");
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});

var db = mongoose.connection;

var app = express();

//don't show the log when it is test

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO Swagger MAy be
app.use("swagger" , express.static(path.join(__dirname, "swagger")));

//To allow cross-origin requests
//TODO SETTINGS CHANGE
app.use(cors());

//Route Prefixes
//TODO MAYbe
// app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
