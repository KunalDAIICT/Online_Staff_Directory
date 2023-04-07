const authorize = require("./authController");
const studentCollection = require('../models/studentModel')
const facultyDetailsCollection = require("../models/facultyDetailsModel");

function getProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const user = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!user) {
		return res.status(401).json({ error: "Invalid token" });
	}
	studentCollection.findOne(user, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		// Send the user profile in the response
		res.status(200).json(user);
	});
}

function getFaculties(req, res) {
	facultyDetailsCollection.find({}, function(err, faculties) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		// Send all the faculties in the response
		res.status(200).json(faculties);
	});
}

module.exports = {
    getProfile: getProfile,
    getFaculties: getFaculties
}