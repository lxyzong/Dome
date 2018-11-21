//往文件内追加内容

//var fs = require("fs");
//var data = "";
//var readSteam = fs.createReadStream("1.txt")
//readSteam.setEncoding("UTF8");
//readSteam.on("data", function(chunk) {
//	data += chunk;
//})
//readSteam.on("end", function() {
//	writeS(data);
//})
//readSteam.on("error", function(err) {
//	console.log(err)
//})
//
//let writeS = dataS => {
//	let writeStream = fs.createWriteStream("input.txt");
//	writeStream.write(dataS, "UTF8");
//	writeStream.end();
//	writeStream.on("finish", function() {
//		console.log("写入完成")
//	})
//	writeStream.on("error", function(err) {
//		console.log(err.stack)
//	})
//}


 var fs=require("fs");
 var read=fs.createReadStream("1.txt");
 var write=fs.createWriteStream("input.txt",{"flang":"a"});
 console.log(fs)
// console.log(write)
//read.pipe(write);
