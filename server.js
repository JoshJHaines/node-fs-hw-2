const http = require("http");

const port = 3000;

const server = http.createServer(function (request, response) {
	response.end("hi class");
});

server.listen(port);
console.log(`Server is now up and running @ port: ${port}`);
