/**
 * Created by cyy on 16/1/17.
 */
var HandTween = (function (_super) {
    __extends(HandTween, _super);
    function HandTween() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=HandTween,p=c.prototype;
    p.onAddToStage = function () {
        this.createScnen();
    };
    p.createScnen = function () {
        this.hand2 = new BitmapDisplay;
        this.hand2.setBitmapByName("hand2");
        this.hand2.anchorOffsetX = this.hand2.width / 2;
        this.hand2.anchorOffsetY = this.hand2.height / 2;
        this.hand2.scaleX = this.hand2.scaleY = 0;
        this.addChild(this.hand2);
        this.hand1 = new BitmapDisplay;
        this.hand1.setBitmapByName("hand1");
        this.hand1.anchorOffsetX = this.hand1.width / 2;
        this.hand1.anchorOffsetY = this.hand1.height / 2;
        this.hand1.scaleX = this.hand1.scaleY = 0;
        this.addChild(this.hand1);
        this.hand = new BitmapDisplay;
        this.hand.setBitmapByName("hand");
        this.hand.x = this.hand1.x - 16;
        this.hand.y = this.hand1.y - 13;
        this.addChild(this.hand);
        this.tw();
    };
    p.tw = function () {
        egret.Tween.get(this.hand, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 450, egret.Ease.sineIn).call(this.tw1, this).wait(150).call(this.tw2, this).to({ scaleX: 1, scaleY: 1 }, 450, egret.Ease.sineIn).wait(150);
    };
    p.tw1 = function () {
        egret.Tween.get(this.hand1).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
    };
    p.tw2 = function () {
        egret.Tween.get(this.hand2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
    };
    return HandTween;
})(DisplayScene);
egret.registerClass(HandTween,'HandTween');
//# sourceMappingURL=HandTween.js.map