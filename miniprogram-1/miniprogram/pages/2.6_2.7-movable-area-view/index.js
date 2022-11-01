// pages/2.6_2.7-movable-area-view/index.js
var base64 = require("../../images/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.widget = this.selectComponent('.widget')
    this.setData({
        icon: base64.icon20,
        slideButtons: [{
          text: '普通1',
          src: '/images/icon_love.svg', // icon的路径
        },{
          text: '普通2',
          extClass: 'test',
          src: '/images/icon_star.svg', // icon的路径
        },{
          type: 'warn',
          text: '警示3',
          extClass: 'test',
          src: '/images/icon_del.svg', // icon的路径
        }],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  tap(e) {
    let kind =  parseInt(e.currentTarget.dataset.kind)
    if (!kind){
      this.setData({
        x: 30,
        y: 30
      })
    }else{
      this.setData({
        x: 0,
        y: 0
      })
    }
    
  },
  onMovableViewChange(e){
    console.log("change",e.detail)
  }
})