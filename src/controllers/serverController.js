const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");

const dbConnection = require("../db/dbConnection");
const loginController = require("../controllers/loginController");
const signUpController = require("../controllers/signUpController");
const reqHandler = require("../controllers/requestHandler");
const adminReqHandler = require("../controllers/adminRequestHandler");
const universityController = require("../controllers/universityController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function startServer() {
	await dbConnection.connectToDB();

	app.post("/signUp", signUpController);
	app.post("/login", loginController);
	app.post("/profile", reqHandler.getProfile);

	app.post("/filter/faculties", reqHandler.getFaculties);
	app.post("/editProfile", reqHandler.editProfile);
	app.get("/verify-email", reqHandler.verifyemail);
	app.get("/deleteProfile", reqHandler.deleteProfile);
	app.get("/admin/allfaculties", adminReqHandler.getallFaculties);
	app.post("/admin/addUniversity", adminReqHandler.addUniversity);
	app.get("/getUniversities",reqHandler.getUniversities);
	app.post("/editUniversity", universityController.editUniversity);
	app.post("/deleteUniversity",universityController.deleteUniversity);
	app.post("/admin/approveFaculty", adminReqHandler.approveFaculty);
	app.post("/admin/deleteFaculty", adminReqHandler.disapproveFaculty);
	app.post("/getFaculty",reqHandler.getFacultyProfile);
	app.post("/sendresetlink",reqHandler.sendresetlink);
	app.post("/resetpassword",reqHandler.resetpassword);
	app.get("/admin/isadmin",adminReqHandler.isadmin);


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


