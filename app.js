//app.js
App({
    onLaunch: function(options) {
        const that = this;
        // 获取系统信息
        const systemInfo = wx.getSystemInfoSync();
        // 胶囊按钮位置信息
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        console.log(systemInfo)
        console.log(menuButtonInfo)
        // 导航栏高度 = 状态栏高度 + 44(所有机型都适用)
        that.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
        that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
        that.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
        that.globalData.menuHeight = menuButtonInfo.height;
    },

    globalData: {
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    }

})
