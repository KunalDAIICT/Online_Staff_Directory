const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

  studentSchema.pre('save',async function() {
    try {
        // const salt= await(bcrypt.genSalt(10));
        const salt = 10 ;
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});

studentSchema.methods.comparePassword=async function (candidatePassword) {
    try {
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        console.log('er')
        throw error
    }
};

module.exports = mongoose.model("Students", studentSchema);
