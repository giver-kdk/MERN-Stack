// Generally, DELETE request requires following: 
// 1) 'id' to specify item 
const express = require("express");
const app = express();
const {people} = require("./data.js");
// API Tools can use any methods for request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.send("Home Page");
});

// Provide 'id' via route parameter
app.delete("/api/people/:id", (req, res) => {
	const {id} = req.params;
	const targetPerson = people.find(person => person.id == id);
	if(!targetPerson){
		const msg = "Person not found";
		// '400' means BAD REQUEST
		res.status(400).json({success: true, errMSg: msg});
	}
	const newPeople = people.filter(person => person.id != id);
	res.status(200).json({success: true, data: newPeople});
});

app.listen(5000, () => console.log("Listening on Port 5000!!!"));

// NOTE: Please use API testing tool like Thunder Client (or Postman) to see Request-Response
// Because, there is no front-end code written for this code