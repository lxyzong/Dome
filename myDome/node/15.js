var express = require("express");
var app = express();

////get接收发送
//app.get("/home_list",function(req,res){
//	res.header("Access-Control-Allow-Origin", "*");
//	var json=JSON.stringify({
//		"success":"2000",
//		"data":[req.query]
//	});
//	res.end(json);
//})
//app.listen(8080,function(){
//	console.log("8080")
//})

//post接收返回数据
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})
app.post("/home_list", urlencodedParser, function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	var json = JSON.stringify({
		"success": "2000",
		"data": [req.body]
	});
	res.end(json);
})
app.listen(8080, function() {
	console.log("8080")
})