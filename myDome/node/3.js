var events=require("events"); 
//创建eventsEmitter对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHeader=function connected(){
	console.log('连接成功！');
	//触发data_received事件
	eventEmitter.emit("data_received");
}
//绑定connection 事件处理程序
eventEmitter.on('connection',connectHeader);
//绑定data_received 事件处理程序

eventEmitter.on("data_received",function(){
	console.log("数据接收成功");
})
eventEmitter.emit('connection');