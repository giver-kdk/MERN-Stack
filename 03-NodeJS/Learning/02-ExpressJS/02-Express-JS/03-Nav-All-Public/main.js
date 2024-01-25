const express = require("express");
const path = require("path");
const app = express();

// Express provides 'static()' middleware for 'app.use(middleware)'
// 'static()' tells app to use static assets from 'public' folder
app.use(express.static("./public-2"));

// Since, 'index.html' is in 'public' folder. So, it will automatically used as entry point by express
app.get("/", (req, res) => {
	// Use this if 'index.html' is outside the 'public' folder
	// 'sendFile()' used to provide file as response
	// 'path' used to retrieve the file from its location
	// res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});
app.get("/about", (req, res) => {
	res.status(200).send("<h1>About Page</h1>");
});
app.get("/contact", (req, res) => {
	res.status(200).send("<h1>Contact Page</h1>");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Page Not Found</h1>");
});
app.listen(5000);