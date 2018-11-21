//function parent(name){
//	console.log(name);
//}
//function children(fun,name){
//	fun(name)
//}
//
//children(parent,'liu')   //传递函数



function parent(fun,name){
	 fun(name)
};

parent(function(name){console.log(name)},"liu")
