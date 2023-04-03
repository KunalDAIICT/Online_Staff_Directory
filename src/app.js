const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect(
	"mongodb+srv://genericUser:CtHn7B8fxljes9EU@onlinestaffdirectory.9r1beak.mongodb.net/OnlineStaffDirectory",
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("mongdb is connected");
		}
	}
	);

const userSchema = {
	_id: String,
	name: String,
	password: String,
	mobile_number: String,
	university: String,
    role: Number // 0 : Student, 1 : Faculty, 2 : Admin
};
const userCollection = mongoose.model("users", userSchema);

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

app.listen(3000, function () {});


// CtHn7B8fxljes9EU