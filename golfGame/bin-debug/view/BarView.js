/**
 * Created by Administrator on 2016/7/7.
 */
var BarView = (function (_super) {
    __extends(BarView, _super);
    function BarView() {
        _super.call(this);
        this.num = -1;
        this.speed = 15;
        this.createScnen();
    }
    var d = __define,c=BarView,p=c.prototype;
    p.createScnen = function () {
        this.bar = new BitmapDisplay("bar");
        this.addChild(this.bar);
        this.sign = new BitmapDisplay("sign");
        this.sign.y = 660;
        this.sign.x = 20;
        this.sign.anchorOffsetY = this.sign.height / 2;
        this.addChild(this.sign);
    };
    p.moveHandle = function () {
        if (this.sign.y < 70) {
            this.num = 1;
        }
        else if (this.sign.y > 650) {
            this.num = -1;
        }
        this.sign.y += this.speed * this.num;
    };
    p.startMove = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
    };
    p.stopMove = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrameHandler, this);
        if (this.sign.y > 103 && this.sign.y < 120) {
            var event = new DataEvent(DataEvent.IS_RESULT);
            event.is_bingo = true;
            Global.dispatchEvent(DataEvent.IS_RESULT, event);
        }
        else {
            var event = new DataEvent(DataEvent.IS_RESULT);
            event.is_bingo = false;
            Global.dispatchEvent(DataEvent.IS_RESULT, event);
        }
    };
    p.onEnterFrameHandler = function () {
        this.moveHandle();
    };
    p.resetBar = function () {
        this.sign.y = 660;
    };
    return BarView;
}(egret.DisplayObjectContainer));
egret.registerClass(BarView,'BarView');
//# sourceMappingURL=BarView.js.map