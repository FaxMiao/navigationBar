// index.js
const app = getApp();
Page({
    data: {
        // 组件参数设置，传递到组件
        defaultData: {
            title: "我的主页", // 导航栏标题
        }
    },
    onLoad() {
        console.log(this.data.height)
    }
})