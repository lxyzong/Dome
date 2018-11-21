var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("pathname" + pathname);
		
		route(pathname);
		
		res.writeHead(200, {
			"Content-Type": "text/piain"
		})
		res.write("hello wrod");
		res.end();
	}

	http.createServer(onRequest).listen(8888, function() {
		console.log("8888")
	})
}
exports.start = start;