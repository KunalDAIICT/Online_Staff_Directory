const mongoose = require("mongoose");

const universityDetailschema = new mongoose.Schema(
	{
		Image: {
			type: String,
			required: false,
		},
        name: {
            type: String,
            required: true,
        },
	},
    { collection: "Universities" }
);

module.exports = mongoose.model("UniversityDetails", universityDetailschema);
