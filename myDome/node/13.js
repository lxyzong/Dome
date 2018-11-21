var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require("querystring");

////get
//http.createServer(function(req,res){
//	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});	
//	var params =url.parse(req.url,true).query;
//	console.log(params)
//	res.write(params.name);
//	res.end();
//	
//}).listen(3000,function(){
//	console.log("3000")
//})

//post
http.createServer(function(req, res) {
	var body = "";
	req.on('data', function(chunk) {
		body += chunk;
	});
	req.on('end', function() {
		// 解析参数
		body = querystring.parse(body);
		// 设置响应头部信息及编码
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf8',
			'Access-Control-Allow-Origin': '*'
		});
		var json = JSON.stringify({
			"success": "2000",
			"data": [body]
		});
		res.end(json);
	});
}).listen(3000, function() {
	console.log("3000")
});