const universityCollection = require("../models/universityModel");

module.exports = function (req, res) {
    universityInstance = new universityCollection({
        name: req.body.name,
        Image: req.body.Image,
    });
    universityInstance.save();
    console.log("New University added");
    res.statusMessage = 'University added successfully';
    res.sendStatus(200);
}
