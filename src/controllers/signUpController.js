const userCollection = require('../models/userModel')

module.exports = function (req, res) {
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
};