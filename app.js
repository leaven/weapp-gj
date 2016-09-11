//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.push(Date.now())
    wx.setStorageSync('logs', logs)
  }
})
