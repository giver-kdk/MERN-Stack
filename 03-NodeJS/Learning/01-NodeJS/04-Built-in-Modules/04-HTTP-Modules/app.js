// Goto 'localhost:5000' in browser to see the output
const http = require("http");
// Creatign a web server to process request and response
const server = http.createServer((req, res) =>{
	if(req.url=="/") 						// Checking request
	{
		// Write something inthe browser document
		res.write("You are in home page");	// Respondign according to request
	}
	else if(req.url == "/about")
	{
		res.write("You are in about page");	
	}
	else res.write("Oops. You are on the wrong page!");	// Runs when accessing unknown URL
	// Indicates all response header and body has been sent. Now, we won't respond further
	res.end("\nEnd of Response!");			
});
// A server needs to be awake all the time. 
// So, if we listen to a port, then the app won't get terminated until we do.
server.listen(5000);			// Making the server to listern to port: 5000