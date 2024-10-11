// Middleware to run during request-response cycle
function showInfo(req, res, next){
	const {method, url} = req;

	const time = new Date();
	console.log(method, url, time.toTimeString());
	next();											// Pass control to next middleware
}

module.exports = showInfo;