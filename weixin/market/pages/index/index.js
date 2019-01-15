"use strict";
var json = require("json.js");
Page({
  data: {
    banner: json.data.banner,
    entry: json.data.entry,
    notice:json.data.notice
  },
  onShareAppMessage: function () {
    return {
      title: '快来和你的小伙伴一起来奇异街疯狂购物吧！',
      path: '/pages/index/index',
      success: function (res) {
        console.log(res);
      }
    }
  },
  onLoad: function() {
    const that = this;
   
  },
});