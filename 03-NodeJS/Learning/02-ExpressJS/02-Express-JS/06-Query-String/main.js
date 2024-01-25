const express = require("express");
const {products} = require("./data.js");
const app = express();

// It is not compulsary to mention anything in route for query
// The URL can be: http://localhost:5000/api/products/search?name=Smartphone
app.get("/api/products/search", (req, res) => {
	// Query string starts with '?' and it should be mentioned by client side
	// Query is automatically stored in 'req' obj when provided in URL by user
	const {name} = req.query;			// Stores query key-value pairs
	if(name){
		// Searching for specified product from product list
		const searchedProduct = products.filter(product => {
			if(product.name.includes(name)) return true;
		});
		res.json(searchedProduct);
	}
	else res.send(`Please provide product name for query`);
});



app.listen(5000, () => console.log("Listening to Port 5000!!!"));