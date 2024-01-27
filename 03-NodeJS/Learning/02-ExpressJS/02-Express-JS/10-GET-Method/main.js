const express = require("express");
const {products} = require("./data.js");
const app = express();

app.get("/", (req, res) => {
	res.status(400).send("<h1>Home</h1><a href='/api/products'>Goto Products</a>");
});

// GET request on specified route
app.get("/api/products", (req, res) => {
	// '400' means BAD REQUEST
	res.status(400).json({success: true, data: products});
});

app.listen(5000, () => console.log("Listening on Port 5000"));