const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
	const myStream = fs.createReadStream("./big-file.txt", "utf8", 10000);
	// Readable stream is connected to writtable stream
	myStream.on("open", (result) => {
		console.log("Data is being written as response!");
		// Stream is written using 'pipe' as a response
		myStream.pipe(res);
	});	
	myStream.on("error", (err) => {
		res.end(err);
	});	
});
server.listen(5000);