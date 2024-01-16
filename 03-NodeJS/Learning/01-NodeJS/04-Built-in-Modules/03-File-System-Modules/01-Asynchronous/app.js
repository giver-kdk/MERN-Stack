// NOTE: To make file-system work, run the node app by moving to the actual directory 
// Since, this is asynchronous. So, the file reading will be done in background 
const fs = require("fs");

// let filePath = path.resolve(__dirname, "one.txt");		// Use this for absolute path
function handleRead(err, res)
{
	if(err) console.log(err);					// Check for error
	else console.log(res);						// Display response
	
}
// readFile(filePath, encodingMethod, callbackFunction)
fs.readFile("./one.txt", "utf8", handleRead);

let message = "This is an overwritten text."
function handleWrite(err, res)
{
	if(err) console.log(err);					// Check for error
	else console.log(res);						// We'll get nothing on write. So, 'undefined'
	
}
// writeFile(filePath, Message, FlagObject, Callback)
// Here, 'a' flag means append. Flag is optional 
fs.writeFile("./two.txt", message, {flag: "a"}, handleWrite);	