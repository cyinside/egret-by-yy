/**
 * Created by cyy on 15/10/13.
 */
var Sence1 = (function (_super) {
    __extends(Sence1, _super);
    function Sence1() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Sence1.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.createGameScene();
        this.tw();
    };
    __egretProto__.createGameScene = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new BitmapDisplay();
        this.bg1.setBitmapByName("bg1");
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
        this.addChild(this.bg1);
        this.gobtn = new BitmapDisplay();
        this.gobtn.setBitmapByName("txt2");
        this.setHorizontalCenter(this.gobtn);
        this.gobtn.y = 920;
        this.gobtn.touchEnabled = true;
        this.addChild(this.gobtn);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goSence2, this);
        this.txt1 = new BitmapDisplay();
        this.txt1.setBitmapByName("txt1");
        this.txt1.y = -this.txt1.height;
        this.setHorizontalCenter(this.txt1);
        this.addChild(this.txt1);
        this.setFullScreen();
    };
    __egretProto__.tw = function () {
        egret.Tween.get(this.txt1).to({ y: 50 }, 800, egret.Ease.backInOut);
    };
    __egretProto__.goSence2 = function () {
        var dataEvent = new DataEvent(DataEvent.GOTO_SCENE2);
        this.dispatchEvent(dataEvent);
    };
    return Sence1;
})(DisplayScene);
Sence1.prototype.__class__ = "Sence1";
