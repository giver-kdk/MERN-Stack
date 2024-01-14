const fs = require("fs");
// Creates a stream object for specified file
// const myStream  = fs.createReadStream("./big-file.txt");
const myStream  = fs.createReadStream("./big-file.txt", "utf8", 10000);
// 'data' event is fired whenever data chunk is available
myStream.on("data", (result) => {
	console.log(result);
});