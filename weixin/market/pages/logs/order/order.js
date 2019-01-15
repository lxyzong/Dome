// pages/logs/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBar: [{
      "text": "全部",
      "isTrue": true
    }, {
      "text": "待付款",
      "isTrue": true
    }, {
      "text": "待发货",
      "isTrue": false
    }, {
      "text": "待收货",
      "isTrue": false
    }, {
      "text": "已完成",
      "isTrue": false
    }],
    iNum: 0,
    show:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  index: function() {
    wx.reLaunch({
      url: '../../index/index'
    });
  },
  nav: function(e) {
    this.setData({
      iNum: e.currentTarget.dataset.idx,
      show: e.currentTarget.dataset.show
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})