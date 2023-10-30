const path = require("path");

console.log(path.sep);				// 'sep' is a property giving path separator character
// Joins the folders and file usign the platform specific separator
let myPath = path.join("parent", "child", "file.txt");
console.log(myPath);
// Gives the last final file name of a path
console.log(path.basename(myPath));
// '__dirname' gives absolute path form home to current app and 
// Remaining folders are resolved together to get absolute path
console.log(path.resolve(__dirname, "parent", "child", "file.txt"));