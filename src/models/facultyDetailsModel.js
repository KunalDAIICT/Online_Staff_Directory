const mongoose = require("mongoose");

const facultyDetailschema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		mobile_number: {
			type: String,
			required: false,
		},
		university: {
			type: String,
			required: true,
		},
		specialization: {
			type: String,
			required: true,
		},
		experience: {
			//in years
			type: Number,
			required: true,
		},
		projects: {
			type: [String],
			required: true,
		},
		Awards_and_Honors: {
			type: [String],
			required: true,
		},
		Industrial_experience: {
			type: [String],
			required: true,
		},
		Publications: {
			type: [String],
			required: true,
		},
		isApproved: {
			type: Boolean,
            required: true,
        },
	},
    { collection: "Faculties" }
);

module.exports = mongoose.model("FacultyDetails", facultyDetailschema);
