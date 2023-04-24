require("dotenv").config();
const jwt = require("jsonwebtoken");

const userCollection = require("../models/studentModel");
const admin = "admin@gmail.com"

module.exports = function (req, res) {
	userCollection.findOne(
		{ _id: req.body.userEmail, password: req.body.password},
		function (err, user) {
			if (user) {
				// User exists and password is correct, generate a JWT
				const token = jwt.sign(
					{ _id: user._id },
					process.env.ACESS_TOKEN_SECRET
				);
				if(user._id === admin){
					console.log("Login Success as admin");
					res.status(200).json({ "token": token, "role": "admin" });
				}
				else{
				// Send the JWT as a response to the client
				console.log("Login Success");
				res.status(200).json({ "token": token , "role" : "user"});
				}
			} else {
				// User does not exist or password is incorrect
				console.log("Login Failed");
				res.status(401).json({ error: "Wrong username or password, Make sure you have verified yourself via the link sent to your email!" });
			}
		}
	);
};
