var http = require("http");

var PORT1 = 7000;
var PORT2= 7500;

function handleRequest1(request, response) {
	response.end("you got this" + request.url);
}

function handleRequest2(request, response) {
	response.end("you don't got this" + request.url);
}

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log("server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
	console.log("server listening on: http://localhost:%s", PORT2);
});