const express = require("express");
const app = express();
const {people} = require("./data.js");

// Includes a Form HTML named 'index.html' inside it
app.use(express.static("./public-3"));
// Allows access to 'req.body' data sent from HTML Form (URL)
// Here, 'extended' tell whether to use extended algo to parse or not
app.use(express.urlencoded({extended: false}));

// Process POST request sent from HTML form submit
app.post("/login", (req, res) => {
	// Extract 'name' sent by HTML form when performing POST request
	const {name} = req.body;
	if(!name){
		// If form submitted without 'name' value. Then error
		const msg = "Please provide name!";
		res.status(400).json({success: true, data: msg});
	}
	// Sending the same data as response. 
	// Here, we haven't actually updated any database
	res.status(200).send(`Welcome ${name}`);
});

app.listen(5000, () => console.log("Listening on Port 5000"));
