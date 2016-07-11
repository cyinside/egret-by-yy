var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene1;p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.addChildByScroller(this.bg1);
        this.startBut = new BitmapDisplay("startbut");
        this.startBut.y = 700;
        this.setHorizontalCenter(this.startBut);
        this.addChildByScroller(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.setFullScreen();
        this.setViewRect();
        egret.Tween.get(this.startBut, { loop: true }).to({ alpha: 0 }, 1200, egret.Ease.sineIn).to({ alpha: 1 }, 600, egret.Ease.sineIn).wait(500);
    };
    p.touchHandle = function () {
        Global.dispatchEvent(DataEvent.REMOVESCENE1, this);
    };
    return Scene1;
})(DisplayScrollerScene);
egret.registerClass(Scene1,"Scene1");
//# sourceMappingURL=Scene1.js.map