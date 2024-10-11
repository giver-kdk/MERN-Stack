const express = require("express");
const app = express();
const showInfo = require("./middlewares/showInfo");

const connectDB = require("./db/connect");			// Import method to connect with MongoDB Database
const { connect } = require("mongoose");

require("dotenv").config();				// Load environment variables from .env file into process.env

const items = require("./routes/items");			// Import the routes to use in the app for particular base
const port = process.env.PORT || 3000;				// Use port assigned by hosting service or hardcoded port 


app.use(express.static('./public'));	// Allow the app to directly access static files in 'public' folder 
app.use(express.json());							// Allow the app to parse JSON request into 'req.body'

app.use(showInfo);									// Custom middleware to display request information


app.use("/api/v1/items", items);				// Assign routes definition('items') to base route

// Start the server only after successfully connecting to the database
const start = async () => {
	try{
		await connectDB(process.env.MONGO_URI);						// Connect to DB using the secret URI

		app.listen(port, () => {
			console.log("Server listening to port: ", port);
		});
	}
	catch(err){
		console.log(err);
	}
}

start();