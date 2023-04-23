const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		mobile_number: {
			type: String,
			required: true,
		},
		university: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		verified: {
			type: Boolean,
            required: true,
        },
		Image: {
			type: String,
			required: false,
		},
	},
	{ collection: "users" }
  );

module.exports = mongoose.model("Students", studentSchema);
