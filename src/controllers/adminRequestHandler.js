const facultyDetailsCollection = require("../models/facultyDetailsModel");
const facultyCollection = require("../models/facultyModel");
const authorize = require("../controllers/authController");
const universityCollection = require("../models/universityModel");

const admin = "admin@gmail.com";

function getallFaculties(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const secretOBJ = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (secretOBJ._id != admin) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	facultyDetailsCollection.find({}, function (err, faculties) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		// Send all the faculties in the response
		res.status(200).json(faculties);
	});
}

function approveFaculty(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const secretOBJ = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (secretOBJ._id != admin) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	const user = {
		_id: req.body.email,
	};

	facultyDetailsCollection.findOne(user, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		user.isApproved = true;
		facultyDetailsCollection.findByIdAndUpdate(
			user._id,
			user,
			{ new: true },
			function (err, updatedUser) {
				if (err) {
					console.error(err);
					return res.status(500).json({ error: "Internal server error" });
				}

				if (!updatedUser) {
					return res.status(404).json({ error: "User not found" });
				}

				console.log("Faculty approved");
				res.status(200).json({ message: "Faculty verification done!!" });
			}
		);
	});
}

function disapproveFaculty(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const secretOBJ = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (secretOBJ._id != admin) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	const user = {
		_id: req.body.email,
	};
	facultyDetailsCollection.findOne(user, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		user.remove();
		res.status(200).json({ message: "Faculty Deletion done!!" });
	});
}

function addUniversity(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const secretOBJ = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (secretOBJ._id != admin) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	universityCollection.exists({ name: req.body.name }, function (err, doc) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}
		if (doc) {
			return res.status(302).json({ error: "University already exists" });
		}
		else {
			universityInstance = new universityCollection({
				name: req.body.name,
				Image: req.body.Image,
			});

			universityInstance.save();
			console.log("New University added");
			res.statusMessage = 'University added successfully';
			res.sendStatus(200);
		}
	});
}

function isadmin(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const secretOBJ = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (secretOBJ._id != admin) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	res.status(200).json({ message: "Authorized" });
}


module.exports = {
	getallFaculties: getallFaculties,
	approveFaculty: approveFaculty,
	disapproveFaculty: disapproveFaculty,
	addUniversity: addUniversity,
	isadmin: isadmin,
};
