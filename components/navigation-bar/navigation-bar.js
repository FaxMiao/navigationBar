const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据）
        defaultData: {
            type: Object,
            value: {
                title: "我是默认标题"
            },
            observer: function (newVal, oldVal) {}
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuTop: app.globalData.menuTop,
        menuHeight: app.globalData.menuHeight,
    },
    attached: function () {

    },
    methods: {

    }
})
