const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const dbConnection = require("../db/dbConnection");
const loginController = require("../controllers/loginController");
const signUpController = require("../controllers/signUpController");
const reqHandler = require("../controllers/requestHandler");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = async function startServer() {
	await dbConnection();

	app.post("/signUp", signUpController);
	app.post("/login", loginController);
	app.post("/studentProfile", reqHandler.getStudentProfile);
	
	app.listen(process.env.PORT_NUM, function (req, res) {
		console.log("Server setup complete, Listening on Port 3000");
	});
}
