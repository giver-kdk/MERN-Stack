// Sending JSON as Response in express. JSON response is generally sent from API
const express = require('express');
const app = express();
const data = require("./data.js");

app.get("/", (req, res) => {
	// 'json()' sends response in JSON format 
	res.json(data);
	// res.send("Response");		// Again sending response like this is not allowed 
});

app.listen(5000, () => console.log("Listening in Port 5000!!!"));