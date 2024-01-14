const http = require("http");
// Now, 'server' is an EventEmitter object in itself
const server = http.createServer((req, res) => {
	res.write("Server Stared!");
});
server.listen(5000);

// 'request' is a predefined event in 'http' module
server.on("request", () => {
	console.log("User is requesting something!");
});