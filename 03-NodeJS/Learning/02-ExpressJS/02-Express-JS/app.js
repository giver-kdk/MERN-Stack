// The purpose of a middleware function is to process the request before it reaches the main route handler.
// Once a middleware function sends a response, the middleware chain is terminated. 
const express = require("express");
const app = express();
// Extracting middlewares from separate files
const showInfo = require("./middlewares/showInfo");
const authenticate = require("./middlewares/authenticate");

// Telling 'app' to use middleware for all routes
// app.use(showInfo);					// Middleware applied to all routes
// app.use([showInfo, authenticate]);	// Multiple middlewares applied to all routes
app.use("/home", authenticate);			// Middleware applied to '/home' route (Can also be base)
app.use("/api", showInfo);				// Middleware applied to all routes with base of '/api'

app.get("/home", (req, res) => {
	// This callback won't run if 'authenticate' middleware ends with response
});

app.get("/api/products", (req, res) => {
	res.send("Products Page");
});
app.get('/api/sales', (req, res) => {
	res.send("Sales Page");
});
app.get('/api/profit', (req, res) => {
	res.send("Profit Page");
});


app.listen(5000, () => console.log("Listening to Port 5000!!!"));