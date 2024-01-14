/*
	Main concept of Event Loop is that: 
	- The various kinds of functions run according to their priority no matter their order of invoking in the program
	- Their priority is set with the help of queues
	- There are multiple types of queues in Event Loop that stores respective function callbacks
	- Now, NodeJS checks those queues in a predefined order and runs functions from there
	- In this way, the functions get called according to their queue's priority 
	- What are the queues? What are their exact priority? This is discussed in NodeJS Blog. 
*/

const fs  = require("fs");
const reader = fs.createReadStream("./ReadMe.txt");
reader.on("close", () => console.log("Close Handler"));

// Synchronous Callback
console.log("Synchronous 1");
// Asynchronous I/O Callback
fs.readFile("./ReadMe.txt", "utf8", () => {
    console.log("Read File")
});
// Close Event
reader.close();
// Asynchornous Check Callback
setImmediate(() => console.log("Set Immediate"));
// Asynchronous Timer Callback
setTimeout(() => console.log("Timer"), 0);
// Asynchronous Promise Callback
Promise.resolve().then(() => console.log("Promise"));
// Asynchronous Next Tick Callback
process.nextTick(() => console.log('Next Tick'));
// Synchronous Callback
console.log("Synchronous 2");