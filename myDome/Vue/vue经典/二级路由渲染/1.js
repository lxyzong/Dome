 var http=require("http");
 var fs=require("fs");
 
 http.createServer(function(req,res){
 	res.setHeader("Access-Control-Allow-Origin","*");
 	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url=="/1"){
    	fs.readFile("1.json",function(err,data){
    		if(!err){
    			res.end(data)
    		}
    	})
    }
    if(req.url=="/2"){
    	fs.readFile("2.json",function(err,data){
    		if(!err){
    			res.end(data)
    		}
    	})
    }
 }).listen(7887,function(){
 	console.log("成功，端口为7887")
 })
