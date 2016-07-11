var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("bg1");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        this.startBtn = new BitmapDisplay();
        this.startBtn.setBitmapByName("startBtn");
        this.addChild(this.startBtn);
        this.setHorizontalCenter(this.startBtn);
        this.startBtn.y = 1015;
        this.startBtn.touchEnabled = true;
        this.setFullScreen();
        this.btnTween();
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchStartHandler, this);
    }
    var d = __define,c=Scene1;p=c.prototype;
    p.touchStartHandler = function (event) {
        var dataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        dataEvent.sceneID = 2;
        this.dispatchEvent(dataEvent);
    };
    p.remove = function () {
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchStartHandler, this);
    };
    p.btnTween = function () {
        egret.Tween.get(this.startBtn, { loop: false }).to({ y: 865 }, 500, egret.Ease.backInOut);
    };
    return Scene1;
})(DisplayScene);
egret.registerClass(Scene1,"Scene1");
//# sourceMappingURL=Scene1.js.map