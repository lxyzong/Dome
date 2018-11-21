var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("data_event", function(one, two) {
	console.log("触发data_event1", one, two)
});
event.on("data_event", function(one, two) {
	console.log("触发data_event2", one, two)
});
setTimeout(function() {
	event.emit("data_event", 'one', 'two'); //执行data_event
}, 1000)