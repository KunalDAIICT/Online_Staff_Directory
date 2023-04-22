const authorize = require("./authController");
const studentCollection = require("../models/studentModel");
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

function editProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const user = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!user) {
		return res.status(401).json({ error: "Invalid token" });
	}

	let updatedUser;
	if (req.body.role == 0)
	{
		updatedUser = new studentCollection({
			name: req.body.name,
			password: req.body.password,
			mobile_number: req.body.mobile_number,
			university: req.body.university,
			role: req.body.role,
		});
	}
	else
	{
		updatedUser = new facultyCollection({
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
	}

	studentCollection.findByIdAndUpdate(
		user._id,
		updatedUser,
		{ new: true },
		function (err, updatedUser) {
			if (err) {
				console.error(err);
				return res.status(500).json({ error: "Internal server error" });
			}

			if (!updatedUser) {
				return res.status(404).json({ error: "User not found" });
			}

			console.log("User updated");
			res.sendStatus(200);
		}
	);
}

function getFaculties(req, res) {
	let filter = {
		isApproved: true,
	};
	if (req.body.university != null) {
		filter.university = req.body.university;
	}
	
	facultyDetailsCollection.find(filter, function (err, faculties) {
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
	getFaculties: getFaculties,
	editProfile: editProfile,
};
