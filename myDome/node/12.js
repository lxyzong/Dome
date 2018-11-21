var fs=require("fs");

//异步读取
//fs.readFile("input.txt",function(err,data){
//	if(!err){
//		console.log("异步读取"+data);
//	}
//})

//同步读取
//var data=fs.readFileSync('input.txt');
//console.log("同步读取"+data);

//fs.open("input.txt",'r+',function(err,fd){  //打开文件
//	if(!err){
//		console.log(fd)
//	}
//})


//fs.stat("input.txt",function(err,stats){  //获取文件信息
//	console.log(stats);
//})

//写入文件,读取文件
//var content='www.baidu.com'
//fs.writeFile("input.txt",content,function(err){
//	if(err){
//		console.log(err)
//	}
//	fs.readFile('input.txt',function(err,data){
//		if(!err){
//			console.log(data.toString())
//		}
//	})
//})




//var buf= new Buffer.alloc(1024);
////打开文件
//fs.open("input.txt",'r+',function(err,fd){
//	if(err){
//		console.log(err)
//	}
////读取文件
////	fs.read(fd,buf,0,buf.length,0,function(err,bufer){
////		if(!err){
////			if(bufer>0){
////				console.log(buf.slice(5,bufer).toString());
////			}
////		}
////	})
//
////截取文件
//  fs.ftruncate(fd,10,function(err){
//  	if(err){
//  		console.log(err)
//  	}
//  	fs.read(fd,buf,0,buf.length,0,function(err,bufer){
//  		if(err){
//  			console.log(err)
//  		}
//  		if(bufer>0){
//  			console.log(bufer);
//  			console.log(buf.slice(0,bufer).toString());
//  		}
//  	})
//  	
//  	fs.close(fd,function(err){
//			if(err){
//				console.log(err);
//			}
//			console.log("关闭文件")
//	    })
//  });
//	
////   fs.close(fd,function(err){
////			if(err){
////				console.log(err);
////			}
////			console.log("关闭文件")
////	    })
//	
//})


////删除文件:
// fs.unlink('new_file.js',function(err){
// 	  if(err){
// 	  	console.log(err)
// 	  }
// 	  console.log("删除成功。")
// })


////创建目录
//fs.mkdir("/Dome/node/test",function(err){
//	if(err){
//		console.log(err)
//	}
//	console.log("创建成功")
//})


////读取目录
// fs.readdir("/Dome/node",function(err,files){
// 	if(!err){
// 		console.log(files)
// 	}
// })


////删除目录
//fs.rmdir("/Dome/node/test",function(err){
//	if(!err){
//		console.log()
//	}
//})
 
 
 
 fs.open('input.txt', "a+", function(err, fd){
    if (err) {
        return console.error(err);
    }
    fs.writeFile(fd, "bb", function(err){
        if (err){
            return console.error(err);
        }
    });
});
