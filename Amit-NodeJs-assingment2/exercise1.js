var fs = require("fs");
const http = require('http');
var stream, server, hostname = 'localhost', port = 8080;
server = http.createServer();
server.on('request', function (req, res) {
	console.log('Request received');
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.setHeader('Content-Type', 'text/plain');
	res.statusCode = 200;
	stream = fs.createReadStream("./nodeSample.txt");
	stream.on("data", function (data) {
		var chunk = data.toString();
		// console.log(chunk);
	});
	stream.pipe(res);
}

);
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});