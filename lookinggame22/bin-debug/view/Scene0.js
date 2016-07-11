/**
 * Created by cyy on 16/3/4.
 */
var Scene0 = (function (_super) {
    __extends(Scene0, _super);
    function Scene0() {
        _super.call(this);
        this.timeNum = 0;
        this.myMusic = document.getElementById('bgmusic1');
        this.createScnen();
    }
    var d = __define,c=Scene0,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg0 = new BitmapDisplay("bg0");
        this.addChild(this.bg0);
        this.startBut = new BitmapDisplay("startBut");
        this.addChild(this.startBut);
        this.setHorizontalCenter(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.y = 820;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this);
        this.blackRect = new egret.Shape;
        this.blackRect.graphics.beginFill(0x000000, 0.7);
        this.blackRect.graphics.drawRect(0, 0, this.width, this.height);
        this.blackRect.graphics.endFill();
        this.rulepage = new BitmapDisplay("rulepage");
        this.setHorizontalCenter(this.rulepage);
        this.rulepage.y = 70;
        this.rulepage.alpha = 0;
        this.addChild(this.rulepage);
        this.startBut1 = new BitmapDisplay("startBut1");
        this.setHorizontalCenter(this.startBut1);
        this.startBut1.touchEnabled = true;
        this.startBut1.y = 820;
        this.startBut1.alpha = 0;
        this.startBut1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoS1, this);
        this.setFullScreen();
    };
    p.gotoS1 = function () {
        Global.dispatchEvent(DataEvent.GOTOS1, this);
    };
    p.showRule = function () {
        this.addChild(this.startBut1);
        egret.Tween.get(this.rulepage).to({ alpha: 1 }, 800, egret.Ease.sineIn);
        egret.Tween.get(this.startBut1).to({ alpha: 1 }, 800, egret.Ease.sineIn);
        this.addChildAt(this.blackRect, 2);
        if (this.myMusic["paused"] == true) {
            this.myMusic["play"]();
        }
    };
    return Scene0;
}(DisplayScene));
egret.registerClass(Scene0,'Scene0');
//# sourceMappingURL=Scene0.js.map