"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function() {
    var _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = function(res) {
        _this.setData({
          userInfo: res,
          hasUserInfo: true
        });
      };
    } else {
      wx.getUserInfo({
        success: function(res) {
          app.globalData.userInfo = res.userInfo;
          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  invite: function() {
    // 分享
    wx.navigateTo({
      url: './invite/invite'
    });
  },
  help: function() {
    // 帮助
    wx.navigateTo({
      url: './help/help'
    });
  },
  crown: function() {
    // 会员服务
    wx.reLaunch({
      url: '../find/find'
    });
  },
  about: function() {
    //关于
    wx.navigateTo({
      url: './about/about'
    });
  },
  address: function() {
    //收货地址页
    wx.navigateTo({
      url: './address/address'
    });
  },
  order: function() {
    wx.navigateTo({
      url: './order/order'
    });
  },
  blank: function() {
    //空白页
    wx.navigateTo({
      url: '../blank/blank'
    });
  }
});