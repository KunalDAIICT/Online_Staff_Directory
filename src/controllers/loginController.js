require("dotenv").config();
const jwt = require("jsonwebtoken");

const studentCollection = require('../models/studentModel')
const facultyCollection = require('../models/facultyModel')

module.exports = function (req, res) {
    if (req.body.role == 0) { //student
        studentCollection.findOne(
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
    }
    else{
        facultyCollection.findOne(
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
    }

}
