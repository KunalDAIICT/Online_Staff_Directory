const authorize = require("./authController");
const studentCollection = require("../models/studentModel");
const facultyCollection = require("../models/facultyModel");
const facultyDetailsCollection = require("../models/facultyDetailsModel");
const UniversityDetailsCollection = require("../models/universityModel");
const sendResetMail = require("./passwordResetMail");

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
	if (req.body.role == 0) {
		updatedUser = new studentCollection({
			name: req.body.name,
			password: req.body.password,
			mobile_number: req.body.mobile_number,
			university: req.body.university,
			role: req.body.role,
			Image: req.body.Image,
		});
	} else {
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
			Image: req.body.Image,
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

			console.log("User updated");
			// res.status(200).json({ message: "user updated" });
		}
	);

	if (req.body.role == 1) {
		facultyDetailsInstance = new facultyDetailsCollection({
			name: req.body.name,
			mobile_number: req.body.mobile_number,
			university: req.body.university,
			specialization: req.body.specialization,
			experience: req.body.experience,
			projects: req.body.projects,
			Awards_and_Honors: req.body.Awards_and_Honors,
			Industrial_experience: req.body.Industrial_experience,
			Publications: req.body.Publications,
			Image: req.body.Image,
			isApproved: false,
		});
		facultyDetailsCollection.findByIdAndUpdate(
			req.body.userEmail,
			facultyDetailsInstance,
			{ new: true },
			function (err, updatedFaculty) {
				if (err) {
					console.error(err);
					return res.status(500).json({ error: "Internal server error" });
				}

				console.log("User updated");
			}
		);
	}
	res.status(200).json({ message: "user updated" });
}

function deleteProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const user = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!user) {
		return res.status(401).json({ error: "Invalid token" });
	}

	studentCollection.findById(user._id, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		user.remove();
		console.log("User deleted");
		res.status(200).json({ message: "user deleted" });
	});
}

function getFaculties(req, res) {
	let filter = {
		isApproved: true,
	};
	if (req.body.university != null) {
		filter.university = req.body.university;
	}
	if (req.body.userEmail != null) {
		filter._id = req.body.userEmail;
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

function verifyUser(req, res) {
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

		user.verified = true;
		studentCollection.findByIdAndUpdate(
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

				console.log("User updated");
				res.status(200).json({ message: "user verification done!!" });
			}
		);
	});
}

function verifyemail(req, res) {
	const email = req.query.id;
    const role = req.query.role;

    // Check if the email belongs to a student
    if (role == 0) {
        studentCollection.findOneAndUpdate(
            { _id: email },
            { $set: { isVerified: true } },
            { new: true },
            function(err, doc) {
                if (err) {
                    console.log("Error updating student document: ", err);
                    res.sendStatus(500);
                } else if (!doc) {
                    console.log("No student found with email: ", email);
                    res.sendStatus(404);
                } else {
                    console.log("Student verified: ", doc);
					res.sendStatus(200);
                    // res.redirect('/login.html');
                }
            }
        );
    }
    // Check if the email belongs to a faculty
    else {
        facultyCollection.findOneAndUpdate(
            { _id: email },
            { $set: { isVerified: true } },
            { new: true },
            function(err, doc) {
                if (err) {
                    console.log("Error updating faculty document: ", err);
                    res.sendStatus(500);
                } else if (!doc) {
                    console.log("No faculty found with email: ", email);
                    res.sendStatus(404);
                } else {
                    console.log("Faculty verified: ", doc);
					res.sendStatus(200);
                    // res.redirect('/login.html');
                }
            }
        );
    }
}

function getUniversities(req, res) {
	UniversityDetailsCollection.find(function (err, universities) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}
		// Send all the faculties in the response
		res.status(200).json(universities);
	});
}

function sendresetlink(req,res) {
	const email = req.body.email;


	studentCollection.findById(email, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const name = user.name;

		sendResetMail(email,name)
		.then((result) => {
			res.status(200).json({ message: "reset link sent" });
		}
		)
		.catch((err) => {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}
		);
	});
}

function resetpassword(req,res){
	const token = req.headers.authorization.split(" ")[1];
	const user = authorize(token, process.env.ACESS_TOKEN_SECRET);

	if (!user) {
		return res.status(401).json({ error: "Invalid token" });
	}

	if (req.body.newpassword == null) {
		return res.status(400).json({ error: "Password not provided" });
	}

	studentCollection.findById(user._id, function (err, user) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		user.password = req.body.newpassword;
		user.save();
		console.log("User updated");
		res.status(200).json({ message: "user updated" });
	});
}


module.exports = {
	getProfile: getProfile,
	getFaculties: getFaculties,
	editProfile: editProfile,
	verifyemail: verifyemail,
	deleteProfile: deleteProfile,
	getUniversities: getUniversities,
	verifyUser: verifyUser,
	sendresetlink: sendresetlink,
	resetpassword: resetpassword,
};
