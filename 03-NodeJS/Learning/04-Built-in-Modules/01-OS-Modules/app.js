const os = require('os');


console.log(os.type());					// Tells base kernel of OS
console.log(os.version());				// Gives OS version
console.log(os.release());				// Tell OS release of base kernel
console.log(os.hostname());				// Tell main user name	
console.log(os.platform());				// Tells if wondows, linux, apple, etc.
console.log(os.userInfo());				// Gives user ID, name and other info
console.log(os.totalmem());				// Tells total RAM
console.log(os.freemem());				// Tells available RAM
console.log(os.uptime());				// Tells CPU uptime 