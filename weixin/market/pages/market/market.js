// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: "",
    Listdetails:"",
    iNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    wx.request({
      url: wx.apiUrl(0) + "product/channel_list",
      success: function(res) {
        if (res.data.status == 2000) {
          that.setData({
            list: res.data.data
          });
          that.Listdetails(that.data.list[0].id);
        }
      }
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
  listTap: function (e) {
    this.setData({
      iNum: e.target.dataset.inum
    });
    this.Listdetails(e.target.dataset.id);
  },
  Listdetails:function(id){
    const that=this;
    wx.request({
      url: wx.apiUrl(0) +'product/channel_detail',
      data:{
        id:id
      },
      success:function(res){
        that.setData({
          Listdetails:res.data.data
        });
      }
    })
  }
  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})