// NOTE: To make file-system work, run the node app by moving to the actual directory 
// Since, this is synchronous. So, the file reading will be done in sequence 
const fs = require("fs");

// readFileSync(filePath, encodingMethod)
let data = fs.readFileSync("./one.txt", "utf8");
console.log(data);
let message = "This is an overwritten text."
// writeFileSync(filePath, Message, FlagObject)
fs.writeFileSync("./two.txt", message, {flag: "a"});		