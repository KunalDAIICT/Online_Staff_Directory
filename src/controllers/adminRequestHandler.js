const facultyDetailsCollection = require("../models/facultyDetailsModel");
const facultyCollection = require("../models/facultyModel");

function getallFaculties(req, res) {

	facultyDetailsCollection.find(function (err, faculties) {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		// Send all the faculties in the response
		res.status(200).json(faculties);
	});
}

function approveFaculty(req, res) {
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
	});
	facultyCollection.findOne(user, function (err,user) {
		if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
		if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

		user.remove();
    });
}

module.exports = {
	getallFaculties: getallFaculties,
	approveFaculty: approveFaculty,
	disapproveFaculty: disapproveFaculty,
};
