function GetQueryString(name) { // 截取url的字段
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return '';
}
/**
 * 获取cookie
 * @param c_name key
 * @returns
 */
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if(c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}
/**
 * 获取用户token
 * @returns
 */
function getToken() {
	var token = "";
	try {
		var ua = navigator.userAgent.toLowerCase();
		if(/iphone|ipad|ipod/.test(ua)) {
			window.webkit.messageHandlers.getToken.postMessage(null);
			token = getCookie('token');
		} else if(/android/.test(ua)) {
			token = window.tool.getToken();
		}
	} catch(e) {

	}
	if(!token) {
		token = GetQueryString('token');
	}
	return token;
}

/**
 * 打开网页
 * @param isclose 是否关闭当前webview，0-否，1-是 
 * @param url
 * @returns
 */
function skipPage(isclose, url) {
	try {
		var ua = navigator.userAgent.toLowerCase();
		if(/iphone|ipad|ipod/.test(ua)) {
			window.webkit.messageHandlers.skipPage.postMessage({
				isclose: isclose,
				url: url
			});
		}
		if(/android/.test(ua)) {
			window.tool.skipPage(isclose, url);
		}
	} catch(e) {
		//TODO handle the exception
		window.location.href = url;
	}

}
