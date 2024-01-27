const express = require("express");
const app = express();
app.use(express.static("./public-4"));
// Allows access to 'req.body' data sent from JavaScript
app.use(express.json());

// Process 'POST' request sent from JavaScript
app.post("/api/people", (req, res) => {
	// Extract 'name' sent from Form using JavaScript
	const {name} = req.body;
	if(!name){
		const msg = "Please provide name!";
		res.status(400).json({success: true, errData: msg});
	}
	res.status(200).json({success: true, person: name});
});

app.listen(5000, () => console.log("Listening on Port 5000!!!"));