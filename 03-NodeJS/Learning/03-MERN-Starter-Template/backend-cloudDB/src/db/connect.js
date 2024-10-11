// Connect with MongoDB database using provided connection string (URI)
const mongoose = require("mongoose");			// Use mongoose driver for systematic MongoDB interaction

const connectDB = (url) => {
	return mongoose.connect(url);
}

module.exports = connectDB;