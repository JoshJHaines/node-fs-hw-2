const http = require("http");

const fs = require("fs");

const port = 3000;

const server = http.createServer(function (request, response) {
	if (request.url === "/") {
		fs.readFile("./public/index.html", function (error, data) {
			if (error) {
				return response.end(`${error}`);
			} else {
				response.writeHead(200, { "Content-type": "text/html" });
				response.write(data);
				return response.end();
			}
		});
	}
	// if (request.url === "create-directory"){
	//     fs.mkdir(".", "content", function(error) {
	//         if (error) {
	// 			return response.end(`${error}`);
	//         } else {
	//             response.end('content folder created')
	//         }
	//     });
	// }
	if (request.url === "/create-directory" && request.method === "POST") {
		fs.mkdir("content", function (error) {
			if (error) {
				response.end("Sorry there is an error: ", error);
			} else {
				console.log("Content Folder created");
				response.end("Content Folder created");
			}
		});
	}
	if (request.url === "/create-text" && request.method === "POST") {
		let body = "";

		request.on("data", function (data) {
			body += data.toString();
		});

		request.on("end", function () {
			let parsedBody = JSON.parse(body);

			fs.writeFile(
				parsedBody.fileName,
				parsedBody.message,
				function (error) {
					if (error) {
						response.writeHead(400);
						response.end(`${error}`);
						response.end();
					} else {
						console.log("randomText.txt created");
						response.end("randomText.txt created");
					}
				}
			);
			console.log(parsedBody);
		});
	}
});

server.listen(port);
console.log(`Server is now up and running @ port: ${port}`);
