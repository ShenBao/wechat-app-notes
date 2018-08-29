//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
    },
    onLoad: function() {

        this.dialog = this.selectComponent("#dialog");

    },

    showDialog: function() {
        this.dialog.showDialog();
    },

    //取消事件
    _cancelEvent() {
        console.log('你点击了取消');
        this.dialog.hideDialog();
        wx.showToast({
            title: '你点击了取消',
            icon: 'none',
            duration: 1000
        });
    },
    //确认事件
    _confirmEvent() {
        console.log('你点击了确定');
        this.dialog.hideDialog();
        wx.showToast({
            title: '你点击了确定',
            icon: 'none',
            duration: 1000
        });
    }
})