require("dotenv").config();
const jwt = require("jsonwebtoken");

const userCollection = require("../models/studentModel");
const facultyModel = require("../models/facultyModel");
const admin = "admin@gmail.com";


module.exports = function (req, res) {
	userCollection.findOne(
		{ _id: req.body.userEmail },
		async function (err, user) {
			console.log(user);
			if (user) {
				const isPasswordCorrect = await user.comparePassword(req.body.password);

				if (isPasswordCorrect == true) {

					// if (user.isVerified) {
					if (true) {
						// User exists and password is correct, generate a JWT
						let token = jwt.sign(
							{ _id: user._id },
							process.env.ACESS_TOKEN_SECRET
						);

						if (user._id === admin) {
							console.log("Login Success as admin");
							res.status(200).json({ token: token, role: "admin" });
						} else {
							// Send the JWT as a response to the client
							console.log("Login Success");
							res.status(200).json({ token: token, role: "user" });
						}
					}
					else {
						console.log("Login Failed, Make sure you have verified yourself via the link sent to your email!");
						res
							.status(402)
							.json({
								error:
									"Make sure you have verified yourself via the link sent to your email!",
							});
					}
				}else {
					// User does not exist or password is incorrect
					console.log("Login Failed");
					res.status(401).json({ error: "Wrong username or password!", });
				}
			}else {
				// User does not exist or password is incorrect
				console.log("Login Failed");
				res.status(401).json({ error: "Wrong username or password!", });
			}
		}
	);
};
