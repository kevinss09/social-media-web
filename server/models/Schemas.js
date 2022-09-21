const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-find-or-create");

const postsSchema = new mongoose.Schema({
	location: {
		type: String,
	},
	caption: {
		type: String,
	},
	image: {
		type: String,
	},
});

const socialsSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
	},
	name: {
		type: String,
	},
	profilePicture: {
		type: String,
	},
	posts: [postsSchema],
});

// It is useful in order to hash and salt our password and store it into our database
socialsSchema.plugin(passportLocalMongoose);
socialsSchema.plugin(findOrCreate);

const Social = new mongoose.model("Social", socialsSchema);
const Post = new mongoose.model("Post", postsSchema);

module.exports = { Social, Post };
