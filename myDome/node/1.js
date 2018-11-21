var http=require("http");
//console.log(http);

http.createServer(function(request,response){
 	 response.writeHead(200,{"Content-Type":"text/plain"});
 	 
 	 response.end('hello word! /n');
}).listen("8888",function(){
	console.log("8888")
})
