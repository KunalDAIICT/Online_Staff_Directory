require("dotenv").config();
const jwt = require("jsonwebtoken");
const studentCollection = require("../models/studentModel");
const facultyCollection = require("../models/facultyModel");
const facultyDetailsCollection = require("../models/facultyDetailsModel");

module.exports = function (req, res) {
	let userInstance;
	if (req.body.role == 0) {
		//student
		studentCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
			if (doc) {
				console.log("User already exist");
				res.status(400).json({
					message: "This e-mail address is already in use!",
				});
			} else {
				userInstance = new studentCollection({
					_id: req.body.userEmail,
					name: req.body.name,
					password: req.body.password,
					mobile_number: req.body.mobile_number,
					university: req.body.university,
					role: req.body.role,
					verified: false,
					Image: req.body.Image,
				});
				userInstance.save();
				console.log("New Student added");
				res.status(200).json({ message: "You are registered successfully" });
			}
		});
	} else {
		facultyCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
			if (doc) {
				console.log("User already exist");
				res.status(400).json({
					message: "This e-mail address is already in use!",
				});
			} else {
				userInstance = new facultyCollection({
					_id: req.body.userEmail,
					name: req.body.name,
					password: req.body.password,
					mobile_number: req.body.mobile_number,
					university: req.body.university,
					role: req.body.role,
					specialization: req.body.specialization,
					experience: req.body.experience,
					projects: req.body.projects,
					Awards_and_Honors: req.body.Awards_and_Honors,
					Industrial_experience: req.body.Industrial_experience,
					Publications: req.body.Publications,
					verified: false,
					Image: req.body.Image,
				});
				userInstance.save();
				facultyDetailsInstance = new facultyDetailsCollection({
					_id: req.body.userEmail,
					name: req.body.name,
					mobile_number: req.body.mobile_number,
					university: req.body.university,
					specialization: req.body.specialization,
					experience: req.body.experience,
					projects: req.body.projects,
					Awards_and_Honors: req.body.Awards_and_Honors,
					Industrial_experience: req.body.Industrial_experience,
					Publications: req.body.Publications,
					isApproved: false,
					Image: req.body.Image,
				});
				facultyDetailsInstance.save();
				console.log("New Faculty added");
				res.status(200).json({ message: "You are registered successfully" });
			}
		});
	}
	const token = jwt.sign(
		{ _id: req.body.userEmail },
		process.env.ACESS_TOKEN_SECRET
	);
};
