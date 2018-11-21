var express = require("express");
var app = express();
var fs = require("fs");

////添加的新用户数据
//var user = {
//	"user4": {
//		"name": "mohit",
//		"password": "password4",
//		"profession": "teacher",
//		"id": 4
//	},
//	"user5": {
//		"name": "mohit",
//		"password": "password5",
//		"profession": "teacher",
//		"id": 5
//	}
//}
//app.get("/list", function(req, res) {
//	fs.readFile(__dirname + "/" + "1.json", 'utf8', function(err, data) {
//		data = JSON.parse(data);
//		data["user4"] = user["user4"];
//		console.log(data);
//		res.end(JSON.stringify(data));
//	});
//})
//var server = app.listen(8081, function() {
//	var host = server.address().address
//	var port = server.address().port
//	console.log("应用实例，访问地址为 http://%s:%s", host, port)
//})

//查找用户数据
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})
app.post("/list/:id",urlencodedParser,function(req,res){
	res.header({"Access-Control-Allow-Origin":"*"});
	fs.readFile(__dirname+"/1.json","utf8",function(err,data){
		if(!err){
			 data=JSON.parse(data);
//			 delete  data["user"+req.params.id];   //删除数据
			 var user=data["user"+req.params.id];
			 var json=JSON.stringify({
			 	 "success":"2000",
			 	 data:[ user,req.body]
			 });
			 res.end(json);
		}
	})
})
app.listen(8080,function(){
	console.log("8080")
})

