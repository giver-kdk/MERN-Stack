const express = require("express");
// Invoke 'express()' to create app object
const app = express();

// 'app' can use following methods for http request: 
// app.get();
// app.post();
// app.put();
// app.delete();

// Run the callback if 'GET' method request done in specified route
app.get("/", (req, res) => {
	// Indirectly sending the response with status
	const resStatus = res.status(200)
	resStatus.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
	// Directly sending the response with status
	res.status(200).send("<h1>About Page</h1>");
});
app.get("/contact", (req, res) => {
	// Directly sending the response without status
	res.send("<h1>Contact Page</h1>");
});
// 'all()' includes get, post, put, delete.
// '*' means any route except above specified routes 
app.all("*", (req, res) => {
	res.status(404).send("<h1>Page Not Found</h1>");
});
// App listens to specified port
app.listen(5000, () => console.log("Server is Listening on Port 5000!!!"));