/**
 * Created by cyy on 16/3/29.
 */
var HeadImg = (function (_super) {
    __extends(HeadImg, _super);
    function HeadImg() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=HeadImg,p=c.prototype;
    p.createScnen = function () {
        this.mask1 = new BitmapDisplay();
        this.mask1.setBitmapByName("mask1");
        this.mask1.anchorOffsetX = this.mask1.width / 2;
        this.mask1.anchorOffsetY = this.mask1.height / 2;
        //this.addChild(this.mask1);
        this.uheadImg = new BitmapDisplay;
        this.addChild(this.uheadImg);
        var image = document.getElementById("img1");
        image["src"] = ConfigModel.getInstance().headUrl;
        //image["src"] = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";
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
        this.mask1.scaleX = this.mask1.scaleY = 1.45;
        this.uheadImg.scaleX = this.uheadImg.scaleY = 165 / this.uheadImg.width;
        //this.uheadImg.mask = this.mask1;
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
        this.mask1.scaleX = this.mask1.scaleY = 1.45;
        this.uheadImg.scaleX = this.uheadImg.scaleY = 165 / this.uheadImg.width;
        //this.uheadImg.mask = this.mask1;
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
    return HeadImg;
}(DisplayScene));
egret.registerClass(HeadImg,'HeadImg');
//# sourceMappingURL=HeadImg.js.map