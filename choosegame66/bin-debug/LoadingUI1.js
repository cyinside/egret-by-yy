var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/12/15.
 */
var LoadingUI1 = (function (_super) {
    __extends(LoadingUI1, _super);
    function LoadingUI1() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.createView();
    }
    var d = __define,c=LoadingUI1;p=c.prototype;
    p.createView = function () {
        this.width = 640;
        this.height = 1030;
        this.rect2 = new egret.Shape;
        this.rect2.graphics.beginFill(0Xf2eada);
        this.rect2.graphics.drawRect(0, 0, 640, 1030);
        this.rect2.graphics.endFill();
        //this.addChild(this.rect2);
        //
        //this.rect1 = new egret.Shape;
        //this.rect1.graphics.beginFill(0X50b7c1);
        //this.rect1.graphics.drawRect(0,1030,640,1030);
        //this.rect1.graphics.endFill();
        //this.addChild(this.rect1);
        this.percentTXT2 = new egret.TextField();
        this.percentTXT2.text = "0%";
        this.percentTXT2.bold = true;
        this.percentTXT2.textColor = 0x50b7c1;
        this.percentTXT2.stroke = 5;
        this.percentTXT2.strokeColor = 0xffc20e;
        this.percentTXT2.size = 120;
        this.percentTXT2.x = this.width / 2;
        this.percentTXT2.y = this.height / 2;
        this.percentTXT2.textAlign = egret.HorizontalAlign.CENTER;
        this.percentTXT2.anchorOffsetX = this.percentTXT2.width / 2;
        this.percentTXT2.anchorOffsetY = this.percentTXT2.height / 2;
        this.addChild(this.percentTXT2);
        this.percentTXT = new egret.TextField();
        this.percentTXT.text = "0%";
        this.percentTXT.bold = true;
        this.percentTXT.textColor = 0Xd3d7d4;
        this.percentTXT.size = 120;
        this.percentTXT.x = this.width / 2;
        this.percentTXT.y = this.height / 2;
        this.percentTXT.textAlign = egret.HorizontalAlign.CENTER;
        this.percentTXT.anchorOffsetX = this.percentTXT.width / 2;
        this.percentTXT.anchorOffsetY = this.percentTXT.height / 2;
        this.addChild(this.percentTXT);
        this.mask1 = new egret.Rectangle(0, this.percentTXT.height, this.width, 150);
        console.log(this.percentTXT.y);
        this.percentTXT.mask = this.mask1;
        this.setFullScreen();
    };
    p.setProgress = function (current, total) {
        //显示进度
        //this.textField.text = "Loading..." + current + "/" + total;
        var per = current / total; //加载的比例
        var per1 = current / total * 100; //加载的比例
        this.mask1.y = this.percentTXT.height - 150 * per;
        //this.testrect.y = this.testrect.y - 150*per;
        this.percentTXT.text = per1.toFixed(0) + "%";
        this.percentTXT2.text = per1.toFixed(0) + "%";
        this.percentTXT2.anchorOffsetX = this.percentTXT2.width / 2;
        this.percentTXT2.anchorOffsetY = this.percentTXT2.height / 2;
        this.percentTXT.anchorOffsetX = this.percentTXT.width / 2;
        this.percentTXT.anchorOffsetY = this.percentTXT.height / 2;
        this.percentTXT2.x = this.width / 2;
        this.percentTXT2.y = this.height / 2;
        this.percentTXT.x = this.width / 2;
        this.percentTXT.y = this.height / 2;
    };
    return LoadingUI1;
})(DisplayScene);
egret.registerClass(LoadingUI1,"LoadingUI1");
//# sourceMappingURL=LoadingUI1.js.map