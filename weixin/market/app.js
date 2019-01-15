"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
App({
  onLaunch: function () {
    var _this = this;
    wx.$alias = "keleguan";
    wx.$system = "";
    wx.getSystemInfo({
      success: function (res) {
        wx.$system = res.system.split(" ")[0].toLowerCase();
      }
    });
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    wx.login({
      success: function (_res) {
        // console.log(_res);
      }
    });
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              _this.globalData.userInfo = res.userInfo;
              if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res.userInfo);
              }
            }
          });
        }
      }
    });
  },
  globalData: {}
});

// 获取接口
wx.apiUrl = function (index) {
  if (index == 1) {
    return "https://api.yimenghd.com/"
  } else {
    return "https://test-api.yimenghd.com/"
  }
};
