const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const adminSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        Image: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        isVerified: {
            type: Boolean,
            required: true,
        }
    },
    { collection: "users" }
);


adminSchema.pre('save',async function() {
    try {
        // const salt= await(bcrypt.genSalt(10));
        const salt = 10 ;
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});

adminSchema.methods.comparePassword=async function (candidatePassword) {
    try {
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    } catch (error) {
        console.log('er')
        throw error
    }
};

module.exports = mongoose.model("Admin", adminSchema);
