const express = require("express");
const app = express();

// Middlewares are the separate functions that processes the request to send the response 
// Order of use is: req => middleware => res

// Process GET requets without middleware
app.get('/', (req, res) => {
	// This Functionality can be converted into middleware
	const {url, method} = req;
	const time = new Date().getFullYear();
	console.log(url, method, time);
	// Final Response
	res.send("Home");
});

// Middleware function can modify 'req/res' objects
function showInfo(req, res, next){
	// ********** DONOT MODIFY REQUEST URL **********
	const {url, method} = req;
	const time = new Date().getFullYear();
	console.log(url, method, time);
	
	// Change in 'req/res' object persists. 
	// Creating custom property in 'req' object
	req.myTime = time;	

	// Either 'send' response or send control to 'next' middleware
	// Here, if 'next()' not used, then server waits inifinitely
	next();				
}
// Middleware function for authentication
function authenticate(req, res, next)
{
	const {name} = req.query;
	if(name)
	{
		if(name === "Giver") res.send("Authorized!");
		else res.send('Unauthorized!!!');
	}
	else res.send('Please provide name query...');

	// Here, no need to use 'next()' because we have sent 'response' 
}
// Inserting Middleware directly in the 'get()' method
app.get("/api/products", showInfo, (req, res) => {
	
	// Shows 'req' property added by middleware
	console.log(req.myTime);
	res.send("Products Page");
});

app.get("/about", showInfo, (req, res) => {
	console.log(req.myTime);
	res.send("About Page");
})

// Passing multiple middlewares in 'get()' method
// 'Position' of middlewares in the array determines the order of execution 
app.get("/login", [showInfo, authenticate], (req, res) => {
	
	// This callback won't run if 'authenticate' middleware ends http request with a response
})

app.listen(5000, () => console.log("Listening in Port 5000!!!"));