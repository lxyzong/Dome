//阻塞的
//var fs=require("fs");
//var data=fs.readFileSync('1.txt');
//console.log(data.toString());

//非阻塞的
var fs = require("fs");
fs.readFile('1.txt', function(err, data) {
	if(!err) {
		console.log(data.toString())
	}
})