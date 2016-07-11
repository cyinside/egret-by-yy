var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
  * 面板基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板的基本属性和方法
  */
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    // 构造函数
    function BasePanel(assetsName) {
        if (assetsName === void 0) { assetsName = "assets"; }
        _super.call(this);
        this.w = 0;
        this.h = 0;
        this.assets = RES.getRes(assetsName);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.initPanel();
    }
    var d = __define,c=BasePanel;p=c.prototype;
    // 初始化面板
    p.initPanel = function () {
    };
    // 初始化面板数据
    p.initData = function () {
    };
    // 进入面板
    p.onEnter = function () {
    };
    // 退出面板
    p.onExit = function () {
    };
    // 关闭面板
    p.closePanel = function () {
        PopUpManager.removePopUp(this);
    };
    // 获取面板宽度
    p.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    p.getHeight = function () {
        return this.height;
    };
    return BasePanel;
})(egret.DisplayObjectContainer);
egret.registerClass(BasePanel,"BasePanel");
