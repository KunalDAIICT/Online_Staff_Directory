const authorize = require("./authController");
const studentCollection = require('../models/studentModel')
const facultyDetailsCollection = require("../models/facultyDetailsModel");

function getProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const student = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!student) {
		return res.status(401).json({ error: "Invalid token" });
	}
	studentCollection.findOne(student, function (err, student) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!student) {
			return res.status(404).json({ error: "User not found" });
		}

		// Send the student profile in the response
		res.status(200).json(student);
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