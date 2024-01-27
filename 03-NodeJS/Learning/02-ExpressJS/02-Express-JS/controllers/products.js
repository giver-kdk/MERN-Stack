function getProduct(req, res){
	res.send("Product Page");
}
function createProduct(req, res){
	res.send("Product Post Page");
}
function updateProduct(req, res){
	res.send("Product Update Page");
}

module.exports = {
	getProduct, 
	createProduct, 
	updateProduct
};