require("dotenv").config();
const jwt = require("jsonwebtoken");

const studentCollection = require("../models/studentModel");

module.exports = function (req, res) {
	studentCollection.findOne(
		{ _id: req.body.userEmail, password: req.body.password, role: req.body.role },
		function (err, user) {
			if (user) {
				// User exists and password is correct, generate a JWT
				const token = jwt.sign(
<<<<<<< HEAD
					{ _id: user._id, role: user.role },
					process.env.ACESS_TOKEN_SECRET
				);
				// Send the JWT as a response to the client
				console.log("Login Success");
				res.status(200).json({ "token": token });
=======
					{ userId: user._id, role: user.role },
					process.env.ACESS_TOKEN_SECRET
				);
				// Send the JWT as a response to the client
				console.log("Login Sucess");
				res.status(200).json({ token });
>>>>>>> f086a4e541938cc4899db9f81b844a5565974abb
			} else {
				// User does not exist or password is incorrect
				console.log("Login Failed");
				res.status(401).json({ error: "Wrong username or password" });
			}
		}
	);
};
