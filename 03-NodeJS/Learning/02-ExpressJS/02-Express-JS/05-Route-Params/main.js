const express = require("express");
const app = express();
const {products} = require("./data.js");

// Home Page with Link 
app.get("/", (req, res) => {
	res.send("<h1>Home Page</h1> <a href='/api/products'>See Products</a>");
});

// When user wants to see product list, we only show few info about the product 
app.get("/api/products", (req, res) => {
	// Extract only needed info and provide as response
	const productList = products.map(product => {
		// Destructure required data
		const {id, name, image} = product;
		return {id, name, image};
	});
	// Provide array of object as JSON string response
	res.json(productList);
});

// When user wants to see a single product, then we show all details about the product 
// Here, route starting with ':' is a custom named route parameter which is requested from front-end side
app.get("/api/products/:pid", (req, res) => {
	// Access route parameters
	// const pid = req.params.pid;
	const {pid} = req.params;
	// Return product data of matching ID
	const productDetail = products.find(product => product.id === Number(pid));
	res.json(productDetail);
});

// We can have multiple route parameters separated by '/'
app.get("/api/products/:pid/:review", (req, res) => {
	const {pid, review} = req.params;
	res.send(`<h1>PID: ${pid}</h1> <h2>Review: ${review}</h2>`);
});
app.listen(5000, () => console.log("Listening on Port 5000"));

