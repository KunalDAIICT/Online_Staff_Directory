const universityCollection = require("../models/universityModel");

function addUniversity (req, res) {
    universityInstance = new universityCollection({
        name: req.body.name,
        Image: req.body.Image,
    });
    universityInstance.save();
    console.log("New University added");
    res.statusMessage = 'University added successfully';
    res.sendStatus(200);
}


function editUniversity(req, res) {

	updatedUni = new universityCollection({
		_id: req.body._id,
		name: req.body.name,
		Image: req.body.Image
	});

	universityCollection.findByIdAndUpdate(
		req.body._id,
		updatedUni,
		{ new: true },
		function (err, updatedUni) {
			if (err) {
				console.error(err);
				return res.status(500).json({ error: "Internal server error" });
			}
			console.log("University Details updated");
			res.status(200).json({ message: "University Details updated" });
		}
	);
}


function deleteUniversity(req, res) {
	universityCollection.findById(
		req.body._id,
		function (err, uni) {
			if (err) {
				console.error(err);
				return res.status(500).json({ error: "Internal server error" });
			}

			if (!uni) {
				return res.status(404).json({ error: "University not found" });
			}

			uni.remove();
			console.log("University deleted");
			res.status(200).json({ message: "University deleted" });
		}
	);
}

module.exports = {
	addUniversity,
	editUniversity,
	deleteUniversity
};
