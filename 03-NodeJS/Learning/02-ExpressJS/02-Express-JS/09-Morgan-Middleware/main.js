// Morgan is a 3rd party middleware that can be installed by: 
// npm i morgan
const express = require("express");
const app = express();
// Middleware to show info about the http request: Method, URL, Status Code etc. 
const morgan = require("morgan");

// 'morgan()' parameters can be: tiny, dev, short, etc.
// app.use(morgan("dev"));
// app.use(morgan("short"));
app.use(morgan("tiny"));			// Applies 'morgan' middleware on all routes

app.get("/", (req, res) => {
	res.send("Home Page");
});
app.get("/about", (req, res) => {
	res.send("About Page");
});
app.get("/contact", (req, res) => {
	res.send("Contact Page");
});

app.listen(5000, () => console.log("Listening in Port 5000!!!"));