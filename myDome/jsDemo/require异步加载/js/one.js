/*config主要配置的是路径*/
require.config({
	baseUrl: "jsl",
	paths: {
		"twoo": "two",
		"three": "three",
	},
	shim: {　　　　　　
		'twoo': {
			deps: ['three'],  /* 先执行下一个  */
			　　　　　　　　exports: '_'　　　　　　
		},
		　　　　　　'three': {　　　　　　　　
			exports: '$'　　　　　　
		}　　　　
	}
})
define(['twoo', 'three'], function(_, $) { 
	console.log(_.names);
	console.log($);
});