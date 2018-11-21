//设置根元素的fontSize值
function add() {
	var html = document.documentElement;
	var hei = html.clientWidth;
	var fz = hei / 375 * 100 + "px";
	html.style.fontSize = fz;
};
add();
window.addEventListener("resize", add, false) //屏幕改变事件
//获取接口域名信息
function apiDomain() {
	var hostname = window.location.hostname;
	var port = window.location.port;
	if(hostname == "h5.yimenghd.com") {
		return "https://api.yimenghd.com/";
	} else {
		return "https://test-api.yimenghd.com/";
	}
}

function webDomain() {
	var hostname = window.location.hostname;
	var port = window.location.port;
	if(hostname == "h5.yimenghd.com") {
		return "https://h5.yimenghd.com/";
	} else {
		return "https://test-h5.yimenghd.com/";
	}
}

function changeTwoDecimal(x) { //保留2位小数
	var f_x = parseFloat(x);
	if(isNaN(f_x)) {
		return 0;
	}
	var f_x = Math.round(x * 100) / 100;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if(pos_decimal < 0) {
		pos_decimal = s_x.length;
		s_x += '.';
	}
	while(s_x.length <= pos_decimal + 2) {
		s_x += '0';
	}
	return s_x;
}



//判断是否为微信打开    0否  : 1是
function isWeiXin() {
	var ua = navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == "micromessenger" ? !0 : !1
};