const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const dbConnection = require("../db/dbConnection");
const loginController = require("../controllers/loginController");
const signUpController = require("../controllers/signUpController");
const reqHandler = require("../controllers/requestHandler");
const adminReqHandler = require("../controllers/adminRequestHandler");
const addUniversityController = require("./addUniversityController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function startServer() {
	await dbConnection.connectToDB();

	app.post("/signUp", signUpController);
	app.post("/login", loginController);
	app.post("/profile", reqHandler.getProfile);
	app.get("/faculties", reqHandler.getFaculties);
	app.post("/editProfile", reqHandler.editProfile);
	app.get("/verifyUser", reqHandler.verifyUser);
	app.get("/deleteProfile", reqHandler.deleteProfile);
	app.get("/pendingRequests", adminReqHandler.getPendingFaculties);
	app.post("/approveFaculty", adminReqHandler.approveFaculty);
	app.post("/addUniversity", addUniversityController);
	app.get("/getUniversities",reqHandler.getUniversities);

	let server = app.listen(process.env.PORT_NUM, function (req, res) {
		console.log("Server setup complete, Listening on Port 3000");
	});

	return server;
}

async function stopServer(server) {
	await server.close(async function () {
		await dbConnection.closeDB();
	});
}

module.exports = {
	startServer,
	stopServer,
};