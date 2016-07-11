var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 16/3/29.
 */
var HeadImg = (function (_super) {
    __extends(HeadImg, _super);
    function HeadImg() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=HeadImg;p=c.prototype;
    p.createScnen = function () {
        this.mask1 = new BitmapDisplay();
        this.mask1.setBitmapByName("mask1");
        this.mask1.anchorOffsetX = this.mask1.width / 2;
        this.mask1.anchorOffsetY = this.mask1.height / 2;
        this.addChild(this.mask1);
        this.uheadImg = new BitmapDisplay;
        this.addChild(this.uheadImg);
        var image = document.getElementById("img1");
        //image["src"] = ConfigModel.getInstance().headUrl;
        image["src"] = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";
        image.addEventListener("load", function (event) {
            Global.dispatchEvent(DataEvent.loadcomp);
        }, false);
        Global.addEventListener(DataEvent.loadcomp, this.loadComple, this);
        //alert(__global.headimgurl);
    };
    p.loadComple = function () {
        var image = document.getElementById("img1");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg.setBitmapByTexture(texture);
        this.uheadImg.anchorOffsetX = this.uheadImg.width / 2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height / 2;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;
        this.uheadImg.mask = this.mask1;
        Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    };
    p.loadComple1 = function () {
        var image = document.getElementById("img2");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg.setBitmapByTexture(texture);
        this.uheadImg.anchorOffsetX = this.uheadImg.width / 2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height / 2;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;
        this.uheadImg.mask = this.mask1;
        Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    };
    p.updateImg = function () {
        var image = document.getElementById("img2");
        image["src"] = ConfigModel.getInstance().headUrl;
        console.log(ConfigModel.getInstance().headUrl);
        image.addEventListener("load", function (event) {
            Global.dispatchEvent(DataEvent.loadcomp);
        }, false);
        Global.addEventListener(DataEvent.loadcomp, this.loadComple1, this);
    };
    p.setHInfo = function (id) {
        switch (id) {
            case 1:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 185 / this.uheadImg.width;
                break;
            case 2:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 185 / this.uheadImg.width;
                break;
            case 3:
                this.mask1.scaleX = this.mask1.scaleY = 1.15;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 165 / this.uheadImg.width;
                break;
            case 4:
                this.mask1.scaleX = this.mask1.scaleY = 1.6;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 265 / this.uheadImg.width;
                break;
            case 5:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 215 / this.uheadImg.width;
                break;
            case 6:
                this.mask1.scaleX = this.mask1.scaleY = 1.5;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 240 / this.uheadImg.width;
                break;
            case 7:
                this.mask1.scaleX = this.mask1.scaleY = 1.7;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 265 / this.uheadImg.width;
                break;
        }
    };
    return HeadImg;
})(DisplayScene);
egret.registerClass(HeadImg,"HeadImg");
//# sourceMappingURL=HeadImg.js.map