var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/24.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.createScene();
        this.tw();
        this.timeOut1 = new egret.Timer(4000, 0);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER, this.setLocation, this);
        this.timeOut1.start();
    }
    var d = __define,c=Scene1;p=c.prototype;
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        var num1 = Math.floor(Math.random() * 4 + 1);
        for (var i = 0; i < num1; i++) {
            this.ets = new Role;
            this.setLocation();
        }
        this.ets.addEventListener(egret.Event.ENTER_FRAME, this.hitHandle, this);
        this.ets.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.planet = new BitmapDisplay;
        this.planet.setBitmapByName("planet");
        this.planet.x = 160;
        this.planet.scaleX = this.planet.scaleY = 0.9;
        this.setVerticalCenter(this.planet);
        this.addChild(this.planet);
        this.Bboom = new BitmapDisplay;
        this.Bboom.setBitmapByName("Bboom");
        this.Bboom.scaleX = this.Bboom.scaleY = 0.4;
        this.Bboom.x = 80;
        this.Bboom.y = 150;
        this.setFullScreen();
    };
    p.setLocation = function () {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 3 + 1);
            console.log(num);
            switch (true) {
                case num == 1:
                    this.ets.x = -this.ets.width;
                    this.ets.y = 30;
                    break;
                case num == 2:
                    this.ets.x = this.width / 2;
                    this.ets.y = -this.ets.height;
                    break;
                case num == 3:
                    this.ets.x = this.width + this.ets.width;
                    this.ets.y = 30;
                    break;
            }
            this.addChild(this.ets);
            egret.Tween.get(this.ets).to({ x: this.width / 2, y: this.height / 2 }, 5000);
        }
    };
    p.tw = function () {
        egret.Tween.get(this.ets).to({ x: this.width / 2, y: this.height / 2 }, 5000);
    };
    p.hitHandle = function () {
        if (HitTestUtil.hitTest(this.planet, this.ets)) {
            this.addChild(this.Bboom);
        }
    };
    p.touchHandle = function () {
        egret.Tween.removeTweens(this.ets);
        this.ets.showBoom();
        egret.setTimeout(this.remove, this, 600);
    };
    p.remove = function () {
        this.removeChild(this.ets);
        this.ets.hideBoom();
    };
    return Scene1;
})(DisplayScene);
egret.registerClass(Scene1,"Scene1");
//# sourceMappingURL=Scene1.js.map