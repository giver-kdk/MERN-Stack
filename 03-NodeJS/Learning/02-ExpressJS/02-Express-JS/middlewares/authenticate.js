function authenticate(req, res, next)
{
	const {name} = req.query;
	if(name)
	{
		if(name === "Giver") res.send("Authorized!");
		else res.send('Unauthorized!!!');
	}
	else res.send('Please provide name query...');

	// Here, no need to use 'next()' because we have sent 'response' 
}

module.exports = authenticate;