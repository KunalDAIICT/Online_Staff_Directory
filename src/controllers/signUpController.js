const studentCollection = require("../models/studentModel");
const facultyCollection = require("../models/facultyModel");
const facultyDetailsCollection = require("../models/facultyDetailsModel");

module.exports = function (req, res) {
	if (req.body.role == 0) {
		//student
		studentCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
			if (doc) {
				console.log("User already exist");
				res.statusMessage =
					'This e-mail address is already in use, <a href="./login.html">login</a>';
				res.send(400);
			} else {
				studentInstance = new studentCollection({
					_id: req.body.userEmail,
					name: req.body.name,
					password: req.body.password,
					mobile_number: req.body.mobile_number,
					university: req.body.university,
					role: req.body.role,
				});
				studentInstance.save();
				console.log("New Student added");
				res.statusMessage =
					'You are registered, head to the <a href="./login.html">login</a> page';
				res.send(200);
			}
		});
	} else {
		facultyCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
			if (doc) {
				console.log("User already exist");
				res.statusMessage =
					'This e-mail address is already in use, <a href="./login.html">login</a>';
				res.send(400);
			} else {
				facultyInstance = new facultyCollection({
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
				});
				facultyInstance.save();
				facultyDetailsInstance = new facultyDetailsCollection({
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
				});
				facultyDetailsInstance.save();
				console.log("New Faculty added");
				res.statusMessage =
					'You are registered, head to the <a href="./login.html">login</a> page';
				res.send(200);
			}
		});
	}
};
