//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[],
    navlist:[]
  },
loadMore:function(){
  wx.request({
    url: 'http://127.0.0.1:3000/imagelist',
    success:(res)=>{
      this.setData({
        list:res.data
      })
    }
  })
},
loadMorenav:function(){
  wx.request({
    url: 'http://127.0.0.1:3000/icons',
    success:(res)=>{
      this.setData({
        navlist:res.data
      })
    }
  })
},
jumphandle: function (e) {
  var id = e.target.dataset.id;
  if (id == 1) {
    wx.navigateTo({
      url: '/pages/people/people',
    })
  }
  if(id==2){
    wx.navigateTo({
      url: '/pages/animal/animal',
    })
  }
  if (id == 3) {
    wx.navigateTo({
      url: '/pages/view/view',
    })
  }
  if (id == 4) {
    wx.navigateTo({
      url: '/pages/plant/plant',
    })
  }
  if (id == 5) {
    wx.navigateTo({
      url: '/pages/building/building',
    })
  }
  if (id ==6) {
    wx.navigateTo({
      url: '/pages/food/food',
    })
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    this.loadMorenav();
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})