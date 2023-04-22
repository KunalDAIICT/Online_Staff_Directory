require("dotenv").config();
const jwt = require("jsonwebtoken");

const studentCollection = require("../models/studentModel");

module.exports = function (req, res) {
	studentCollection.findOne(
		{ _id: req.body.userEmail, password: req.body.password },
		function (err, user) {
			if (user) {
				// User exists and password is correct, generate a JWT
				const token = jwt.sign(
					{ _id: user._id },
					process.env.ACESS_TOKEN_SECRET
				);
				// Send the JWT as a response to the client
				console.log("Login Success");
				res.status(200).json({ "token": token });
			} else {
				// User does not exist or password is incorrect
				console.log("Login Failed");
				res.status(401).json({ error: "Wrong username or password" });
			}
		}
	);
};
