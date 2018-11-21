var express = require("express");
var app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	port: "3306",
	database: "test"
})
connection.connect();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});
app.post("/login", urlencodedParser, function(req, res) {
	res.header({
		"Access-Control-Allow-Origin": "*"
	});
	var ipone = req.body.ipone;
	var data = null;
	connection.query('SELECT * FROM websites', function(err, response) {
		if(!err) {
			if(response) {
				for(var i = 0; i < response.length; i++) {
					if(response[i].ipone == ipone) {
						data = response[i]
					}
				}
				if(data) {
					var json = {
						"error": "该账号已注册。"
					};
					res.send(JSON.stringify(json));
				} else {
					var obj = {
						name: req.body.name,
						ipone: req.body.ipone
					};
					console.log(obj);
					connection.query('INSERT INTO websites SET  ?', obj, function(err, resp) {
						if(err) {
							console.log(err.massage);
						}
						var json = {
							"success": "2000",
							data: [{
								"login": "注册成功。"
							}]
						}
						res.end(JSON.stringify(json));
					})
				}
			}
		} else {
			console.log(err.massage)
		}
	});

})

app.post("/select", urlencodedParser, function(req, res) {
	res.header({
		"Access-Control-Allow-Origin": "*"
	});
	var ipone = req.body.ipone;
	var data = null;
	connection.query('SELECT * FROM websites', function(err, response) {
		if(!err) {
			if(response) {
				for(var i = 0; i < response.length; i++) {
					if(response[i].ipone == ipone) {
						console.log(response[i]);
						data = response[i]
					}
				}
				if(data) {
					var json = {
						"success": "2000",
						data: [req.body, data]
					};
				} else {
					var json = {
						"error": "该账号未注册。"
					};
				}
				res.send(JSON.stringify(json));
			}
		} else {
			console.log(err.massage)
		}
	});
	//  connection.end();   //关闭数据库连接
});
app.listen(8080, function() {
	console.log("8080")
})




function apiDomain() {
	var hostname = window.location.hostname;  //获取本地域名
	var port = window.location.port;  //获取端口号
	if(hostname == "你们正式的域名") {
		return "你们正式的域名";
	} else {
		return "你们测式的域名";
	}
}