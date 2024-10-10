// Connect with MongoDB database using provided connection string (URI)
const mongoose = require("mongoose");			// Use mongoose driver for systematic MongoDB interaction

const connectDB = (url) => {
	return mongoose.connect(url, {
		// Options to use newer methods
		// useNewUrlParser: true,
		// useCreateIndex: true,
		// useFindAndModify: false,
		// useUnifiedTopology: true,
	})
}

module.exports = connectDB;