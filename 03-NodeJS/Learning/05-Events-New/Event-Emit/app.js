 // Here, 'EventEmitter' is a class
 const EventEmitter = require("events");
 // Now, 'myEmitter' is an object 
 const myEmitter = new EventEmitter();
// Adding event listener with the event object
myEmitter.on("rain", (place) => {
	console.log("It's raining at", place);
});
// The event is triggered/emitted here
myEmitter.emit("rain", "Kathmandu");