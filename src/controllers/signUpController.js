const studentCollection = require("../models/studentModel");
const facultyCollection = require("../models/facultyModel");
const facultyDetailsCollection = require("../models/facultyDetailsModel");
const sendAuthMail = require("./emailVerification"); // import the email verification function

module.exports = function (req, res) {
    if (req.body.role == 0) {
        //student
        studentCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
            if (doc) {
                console.log("User already exist");
                res.statusMessage =
                    'This e-mail address is already in use, <a href="./login.html">login</a>';
                res.sendStatus(400);
            } else {
                studentInstance = new studentCollection({
                    _id: req.body.userEmail,
                    name: req.body.name,
                    password: req.body.password,
                    mobile_number: req.body.mobile_number,
                    university: req.body.university,
                    role: req.body.role,
                    Image:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
					isVerified: false,
                });
                studentInstance.save();
                console.log("New Student added");
                sendAuthMail(req.body.userEmail, req.body.name);

                res.statusMessage =
                    'You are registered, head to the <a href="./login.html">login</a> page';
                res.sendStatus(200);
            }
        });
    } else {
        facultyCollection.exists({ _id: req.body.userEmail }, function (err, doc) {
            if (doc) {
                console.log("User already exist");
                res.statusMessage =
                    'This e-mail address is already in use, <a href="./login.html">login</a>';
                res.sendStatus(400);
            } else {
                facultyInstance = new facultyCollection({
                    _id: req.body.userEmail,
                    name: req.body.name,
                    password: req.body.password,
                    mobile_number: req.body.mobile_number,
                    university: req.body.university,
                    role: req.body.role,
                    specialization: req.body.specialization,
                    experience: req.body.experience,
                    projects: req.body.projects,
                    Awards_and_Honors: req.body.Awards_and_Honors,
                    Industrial_experience: req.body.Industrial_experience,
                    Publications: req.body.Publications,
                    Image:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
					isVerified: false,
                });
                facultyInstance.save();
                facultyDetailsInstance = new facultyDetailsCollection({
                    _id: req.body.userEmail,
                    name: req.body.name,
                    mobile_number: req.body.mobile_number,
                    university: req.body.university,
                    specialization: req.body.specialization,
                    experience: req.body.experience,
                    projects: req.body.projects,
                    Awards_and_Honors: req.body.Awards_and_Honors,
                    Industrial_experience: req.body.Industrial_experience,
                    Publications: req.body.Publications,
                    Image:"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
                    isApproved: false,
                });
                facultyDetailsInstance.save();
                console.log("New Faculty added");
                sendAuthMail(req.body.userEmailreq.body.name);
                res.statusMessage =
                    'You are registered, head to the <a href="./login.html">login</a> page';
                res.sendStatus(200);
            }
        });
    }
};
