/**
 * Created by cyy on 16/5/20.
 */
var Scene2 = (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene2,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.group.addChild(this.bg1);
        this.text1 = new egret.TextField;
        this.text1.text = "点击屏幕";
        this.text1.x = this.width / 2 - this.text1.width + 20;
        this.text1.y = 780;
        this.text1.textColor = 0x3E3E3E;
        this.text1.alpha = 0;
        this.group.addChild(this.text1);
        this.text2 = new egret.TextField;
        this.text2.text = "开始告白";
        this.text2.x = this.text1.x + this.text1.width - 20;
        this.text2.y = 820;
        this.text2.textColor = 0x3E3E3E;
        this.text2.alpha = 0;
        this.group.addChild(this.text2);
        this.setFullScreen();
        this.setViewRect();
        egret.setTimeout(function () { this.textTw(); }, this, 1000);
    };
    p.textTw = function () {
        egret.Tween.get(this.text1).to({ alpha: 1, y: 800 }, 800, egret.Ease.sineInOut).call(function () {
            egret.Tween.get(this.text1).to({ x: this.width / 2 - this.text1.width }, 600, egret.Ease.sineInOut).call(function () {
                egret.Tween.get(this.text2).to({ alpha: 1, y: 800 }, 800, egret.Ease.sineInOut).call(this.setTouch, this);
            }, this);
        }, this);
    };
    p.setTouch = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
    };
    p.touchHandle = function () {
        this.startMusic();
        var event = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 3;
        Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
    };
    p.startMusic = function () {
        var musicDiv = document.getElementById("bgmusic");
        if (musicDiv["paused"] == true) {
            musicDiv["play"]();
        }
    };
    return Scene2;
}(DisplayScrollerScene));
egret.registerClass(Scene2,'Scene2');
//# sourceMappingURL=Scene2.js.map