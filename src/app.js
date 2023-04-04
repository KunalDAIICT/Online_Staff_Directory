require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const userCollection = require('./models/userModel');
const dbConnection = require('./db/dbConnection');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function startServer() {
	await dbConnection();

	app.post("/signUp", function (req, res) {
		userCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
			if (doc) {
				console.log("User already exisits");
				res.statusMessage =
					'This e-mail address is already in use, <a href="./login.html">login</a>';
				res.send(400);
			} else {
				userInstance = new userCollection({
					_id: req.body.userEmail,
					name: req.body.name,
					password: req.body.password,
					mobile_number: req.body.mobile_number,
					university: req.body.university,
					role: req.body.role,
				});
				userInstance.save();
				console.log("New User added");
				res.statusMessage =
					'You are registered, head to the <a href="./login.html">login</a> page';
				res.send(200);
			}
		});
	});

	app.post("/login", function (req, res) {
		userCollection.findOne(
			{ _id: req.body.userEmail, password: req.body.password },
			function (err, user) {
				if (user) {
					// User exists and password is correct, generate a JWT
					const token = jwt.sign(
						{ userId: user._id, role: user.role },
						process.env.ACESS_TOKEN_SECRET
					);

					// Send the JWT as a response to the client
					res.status(200).json({ token });
				} else {
					// User does not exist or password is incorrect
					console.log("Login Failed");
					res.status(401).json({ error: "Wrong username or password" });
				}
			}
		);
	});

	app.listen(3000, async function () {
		console.log("Server setup complete, Listening on Port 3000");
	});
}

startServer();