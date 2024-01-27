// For controller, no need to use 'express' module
// Simply create functions and export them
function getHome(req, res){
	res.send("Home Page");
}
function getAbout(req, res){
	res.send("About Page");
}

// Exporting multiple controller functions 
module.exports = {
	getHome, 
	getAbout
};