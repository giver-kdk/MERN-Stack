const express = require("express");
const app = express();

const connectDB = require("./db/connect");			// Import method to connect with MongoDB Database
const { connect } = require("mongoose");

require("dotenv").config();				// Load environment variables from .env file into process.env
// const products = 
const port = process.env.PORT || 3000;				// Use port assigned by hosting service or hardcoded port 





// Start the server only after successfully connecting to the database
const start = async () => {
	try{
		await connectDB(process.env.MONGO_URI);						// Connect to DB using the secret URI

		app.listen(port, () => {
			console.log("Server listening to port: ", port);
		});
	}
	catch(err)
	{
		console.log(err);
	}
}

start();