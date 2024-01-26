function showInfo(req, res, next)
{
	const {url, method} = req;
	const time = new Date().getFullYear();
	console.log(url, method, time);
	
	// Creating custom property in 'req' object
	req.myTime = time;	
	
	next();		
}

module.exports = showInfo;