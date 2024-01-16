const http = require("http");
const fs = require("fs");
let home = fs.readFileSync("./home-page/index.html");
let about = fs.readFileSync("./about-page/index.html");
let contact = fs.readFileSync("./contact-page/index.html");
let navbar = fs.readFileSync("./navbar/index.html");
let style = fs.readFileSync("./navbar/styles.css");
let script = fs.readFileSync("./navbar/browser-app.js");
let logo = fs.readFileSync("./navbar/logo.svg");

const server = http.createServer((req, res) => {
	console.log(req.method);		// GET, POST, PUT, DELETE, ...
	const url = req.url;			// '/about', '/service', '/contact', ...

	if(url == "/"){
		// res.writeHead(statusCode [, statusMessage] [, headerMetaData]);
		res.writeHead(200, {'content-type': 'text/html'});
		// res.writeHead(200, {'content-type': 'text/css'});
		// res.writeHead(200, {'content-type': 'text/javascript'});
		// res.writeHead(200, {'content-type': 'text/plain'});
		// res.writeHead(200, {'content-type': 'image/svg+xml'});
		// res.writeHead(200, {'content-type': 'application/json'});

		res.write(home);
		// res.write("<h1>Home Page</h1>");
		res.end();					// Always end the response
	}
	else if(url == "/about"){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(about);
		res.end();					
	}
	else if(url == "/contact"){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(contact);
		res.end();					
	}
	else if(url == "/navbar"){
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(navbar);
		res.end();					
	}
	
	// Separeate Response for links(css, js, image) inside the 'navbar/index.html' file
	// Here, we have to write individual response for each external links included in HTML.(Frustating)
	else if(url == "/styles.css"){
		res.writeHead(200, {'content-type': 'text/css'});
		res.write(style);
		res.end();					
	}
	else if(url == "/browser-app.js"){
		res.writeHead(200, {'content-type': 'text/javascript'});
		res.write(script);
		res.end();					
	}
	else if(url == "/logo.svg"){
		res.writeHead(200, {'content-type': 'image/svg+xml'});
		res.write(logo);
		res.end();					
	}

	// 'Error 404' Page
	else{
		res.writeHead(404, {'content-type': 'text/html'});
		res.write("<h1>Page Not Found</h1>");
		res.end();					
	}

});	

server.listen(5000);