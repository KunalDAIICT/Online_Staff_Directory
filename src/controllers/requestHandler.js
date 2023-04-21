const authorize = require("./authController");
const studentCollection = require('../models/studentModel')
<<<<<<< HEAD
const facultyDetailsCollection = require("../models/facultyDetailsModel");

function getProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const user = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!user) {
		return res.status(401).json({ error: "Invalid token" });
	}
	studentCollection.findOne(user, function (err, user) {
=======

function getStudentProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const student = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!student) {
		return res.status(401).json({ error: "Invalid token" });
	}
	studentCollection.findOne(student, function (err, student) {
>>>>>>> f086a4e541938cc4899db9f81b844a5565974abb
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

<<<<<<< HEAD
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
=======
		if (!student) {
			return res.status(404).json({ error: "User not found" });
		}

		// Send the student profile in the response
		res.status(200).json(student);
>>>>>>> f086a4e541938cc4899db9f81b844a5565974abb
	});
}

module.exports = {
<<<<<<< HEAD
    getProfile: getProfile,
    getFaculties: getFaculties
}
=======
    getStudentProfile: getStudentProfile,

}
>>>>>>> f086a4e541938cc4899db9f81b844a5565974abb
