
//读取文件数据
var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
});
readerStream.on('end', function() {
	console.log(data);
});
readerStream.on('error', function(err) {
	console.log(err.stack);
});
console.log("程序执行完毕");


////往文件内写数据,  会重置文件数据
//var fs=require("fs");
//var data='Go to BeiJing.';
//var writeStream=fs.createWriteStream("input.txt");
//console.log(writeStream);
//writeStream.write(data,"utf-8");//写入数据
//writeStream.end();//结束
////写入完成执行
//writeStream.on("finish",function(){
// console.log("写入完成！")
//})
//writeStream.on("error",function(err){
//	console.log(err);
//})
//console.log("执行完成")


////复制流
//var fs=require("fs");
//var createStream=fs.createReadStream("input.txt");  //读取文件内容
//var writeStream=fs.createWriteStream("i.txt");  //写入的文件
//createStream.pipe(writeStream);  //写入
//console.log('复制成功')

//// 使用链式流压缩文件
//var fs=require("fs");
//var zlib=require("zlib");
//   //压缩
////fs.createReadStream("input.txt")
////  .pipe(zlib.createGzip())
////  .pipe(fs.createWriteStream("input.zip"));
////  console.log("压缩完成")
//// 解压
// fs.createReadStream("input.txt.zip")
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream("e.txt"))
// console.log('解压完成')
