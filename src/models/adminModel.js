const mongoose = require("mongoose");

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
    },
    { collection: "users" }
);

module.exports = mongoose.model("Admin", adminSchema);
