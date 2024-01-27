// Generally, PUT request requires following: 
// 1) 'id' to specify item 
// 2) 'data' to update the item with

const express = require("express");
const app = express();
const {people} = require("./data.js");
// We can use any method in API test tool
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.send("Home Page");
});

// Provide 'id' via route parameter
app.put("/api/people/:id", (req, res) => {
	const {id} = req.params;
	// Provide updater 'data' via request body
	const {name} = req.body;
	// See if there a person with provided 'id'
	const targetPerson = people.find(person => person.id == Number(id));
	if(!targetPerson){
		const msg = "Person not found";
		// '400' means BAD REQUEST
		res.status(400).json({success: true, errMsg: msg});
	}
	// Search and Update the person info 
	const updatedPeople = people.map(person => {
		if(person.id == Number(id)) 
			person.name = name;
		return person;
	});
	res.status(200).json({success: true, data: updatedPeople});
});


app.listen(5000, () => console.log("Listening on PORT 5000!!!"));

// NOTE: Please use API testing tool like Thunder Client (or Postman) to see Request-Response
// Because, there is no front-end code written for this code