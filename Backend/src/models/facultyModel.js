const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const facultySchema = new mongoose.Schema(
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
		isVerified: {
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

facultySchema.pre('save',async function() {
    try {
        // const salt= await(bcrypt.genSalt(10));
        const salt = 10 ;
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});

facultySchema.methods.comparePassword=async function (candidatePassword) {
    try {
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        console.log('er')
        throw error
    }
};

module.exports = mongoose.model("Faculties", facultySchema);
