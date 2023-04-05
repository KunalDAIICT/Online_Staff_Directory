const authorize = require("./authController");
const userCollection = require('../models/userModel')

function getStudentProfile(req, res) {
	const token = req.headers.authorization.split(" ")[1];
	const student = authorize(token, process.env.ACESS_TOKEN_SECRET);
	if (!student) {
		return res.status(401).json({ error: "Invalid token" });
	}
	userCollection.findOne(student, function (err, student) {
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

module.exports = {
    getStudentProfile: getStudentProfile,

}
