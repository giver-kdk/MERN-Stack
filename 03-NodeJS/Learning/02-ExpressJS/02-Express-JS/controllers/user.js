function getUser(req, res){
	res.send("User Page");
}
function userReview(req, res){
	res.send("User Review");
}
module.exports = {
	getUser,
	userReview
};