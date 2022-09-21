const express = require("express");
const router = express.Router();
const { Social, Post } = require("../models/Schemas.js");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const passport = require("passport");
const dotenv = require("dotenv");
const session = require("express-session");
const passportLocalMongoose = require("passport-local-mongoose");
const saltRounds = 10;
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");
const flush = require("connect-flash");
const { profile } = require("console");
dotenv.config();

// use passport local mongoose to serialize and desirialize the cookie
passport.use(Social.createStrategy());

// Don't forget to serialize and deserialize the user
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	Social.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
		},
		// google sent back accestoken, the informatin about user
		async function (accessToken, refreshToken, profile, done) {
			try {
				let foundUser = await Social.findOne({ id: profile.id });

				if (!foundUser) {
					const newUser = new Social({
						id: profile.id,
						username: profile.displayName,
						name: profile.displayName,
						profilePicture: profile.photos[0].value,
					});

					await newUser.save();
					console.log("It save a new user");

					return done(null, newUser);
				}

				return done(null, foundUser);
			} catch (err) {
				console.log("It does not save a new user ");
				return done(err);
			}
		}

		// async function (accessToken, refreshToken, profile, cb) {
		// 	console.log(profile);

		// 	Social.findOrCreate({ googleId: profile.id }, function (err, user) {
		// 		return cb(err, user);
		// 	});

		// 	// Social.findOrCreate(
		// 	// 	{
		// 	// 		id: profile.id,
		// 	// 		username: profile.displayName,
		// 	// 		name: profile.displayName,
		// 	// 		profilePicture: profile.photos[0].value,
		// 	// 	},
		// 	// 	function (err, user) {
		// 	// 		return cb(err, user);
		// 	// 	}
		// 	// );
		// }
	)
);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// cb(null, "images");
		cb(null, __dirname);
	},
	filename: (req, file, cb) => {
		// cb(null, new Date().getTime() + "-" + file.originalname);
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg"
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

// app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"));

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get("/socials", (req, res) => {
	console.log("it goes inside router.get(/socials)");
	console.log(req.user);
	Social.find({}, (err, foundSocial) => {
		if (!err) {
			console.log("it goes here");
			res.end(JSON.stringify(foundSocial));
		} else {
			console.log("There is an error retrieving the data");
			console.log(err);
		}
	});
	// Social.findOne({ id: req.user.id }, (err, foundUser) => {
	// 	if (!err) {
	// 		res.send(JSON.stringify(foundUser));
	// 	} else {
	// 		console.log("There is an error retrieving the data");
	// 		console.log(err);
	// 	}
	// });
});

router.post("/addNewAccount", upload.single("img"), async (req, res) => {
	console.log("it goes inside router.post(addNewAccount)");

	Social.register(
		{
			username: req.body.username,
			name: req.body.name,
			profilePicture: req.file.path,
		},
		req.body.password,

		function (err, user) {
			if (err) {
				console.log("it has been register, go back to login page");
				res.redirect("/register");
			} else {
				// use cookis if they are still login and make it automotically login
				console.log("it goes here");
				passport.authenticate("local")(req, res, function () {
					console.log("LOLO");
					res.redirect("/home");
				});
			}
		}
	);
});

router.post("/addNewPost", upload.single("img"), async (req, res) => {
	const location = req.body.location;
	const caption = req.body.caption;
	const img = req.file.path;
	console.log(img);

	const package = new Post({
		location: location,
		caption: caption,
		image: img,
	});

	console.log(req.user.id);
	Social.findById(req.user.id, (err, foundUser) => {
		if (err) {
			console.log("cannot find the id of req.user.id");
			console.log("Its error ");
		} else {
			if (foundUser) {
				foundUser.posts.push(package);
				foundUser.save();
				passport.authenticate("local")(req, res, function () {
					console.log("LOLO");
					res.redirect("/home");
				});
			}
		}
	});
});

router.post("/addEmailPassword", (req, res) => {
	const user = new Social({
		username: req.body.username,
		password: req.body.password,
	});

	req.login(user, (err) => {
		if (err) {
			console.log(err);
			console.log("Cannot login");
		} else {
			// gonna send the cookie to the browser and tell the browser to hold the cookie
			passport.authenticate("local", {
				failureRedirect: "/loginFailure",
			})(req, res, () => {
				console.log("IT GOT LOG IN BRO TF YES");
				res.redirect("/home");
			});
		}
	});
});

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile"],
	})
);

router.get(
	"/auth/google/callback",
	// passport.authenticate("google", {
	// 	successRedirect: "/home",
	// 	failureRedirect: "/login",
	// })
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		res.redirect("/home");
	}
);

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successfull",
			user: req.user,
		});
	}
});

module.exports = router;
