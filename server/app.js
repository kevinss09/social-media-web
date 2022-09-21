//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize the session to have the key of password and set the resave to false
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

// initialize the passport package

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routesHandler);
// Create a DB connection
mongoose
	.connect(process.env.DB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log(err);
		console.log("it goes error ");
	});

app.listen(4000, () => {
	console.log("Server has connected to port 4000");
});
