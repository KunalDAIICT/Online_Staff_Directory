require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDB() {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTION_STRING,
            { useNewUrlParser: true },
            { useUnifiedTopology: true }
        );
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

async function closeDB() {
    await mongoose.connection.close();
}

module.exports = {
    connectToDB,
    closeDB
};
