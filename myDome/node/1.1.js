var http = require("http");
var fs = require("fs");
http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/piain",
		"Access-Control-Allow-Origin": "*"
	})
	fs.readFile('1.json', function(err, data) {
		if(!err) {
			res.end(data.toString());
		} else {
			console.log(err);
		}
	})
}).listen(8888, function() {
	console.log("8888")
})