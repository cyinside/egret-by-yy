/**
 * Created by cyy on 16/4/26.
 */
var PageTurning = (function (_super) {
    __extends(PageTurning, _super);
    function PageTurning(p1, p2) {
        _super.call(this);
        this.beginX = 0;
        this.beginY = 0;
        this.endX = 0;
        this.endY = 0;
        this.num = 1;
        this.maxPageNum = 4;
        this.createScnen(p1, p2);
    }
    var d = __define,c=PageTurning,p=c.prototype;
    p.createScnen = function (p1, p2) {
        this.width = 640;
        this.height = 1030;
        this.p1 = p1;
        this.p2 = p2;
        this.p1.touchEnabled = true;
        this.p2.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchend, this);
    };
    p.touchBegin = function (e) {
        this.beginX = e.stageX;
        this.beginY = e.stageY;
    };
    p.touchend = function (e) {
        this.endX = e.stageX;
        this.endY = e.stageY;
        this.touchHandle(this.beginX, this.beginY, this.endX, this.endY);
    };
    p.touchHandle = function (beginX, beginY, endX, endY) {
        if (beginX === void 0) { beginX = 0; }
        if (beginY === void 0) { beginY = 0; }
        if (endX === void 0) { endX = 0; }
        if (endY === void 0) { endY = 0; }
        this.touchControl();
        if (endY - beginY < -50) {
            this.num++;
            //this.up.alpha=1;
            if (this.num > this.maxPageNum) {
            }
            this.twHandle(1, this.num);
        }
        else if (endY - beginY > 50) {
            this.num--;
            if (this.num < 1) {
                this.num = 1;
                return;
            }
            if (this.num == 1) {
            }
            this.twHandle(2, this.num);
        }
    };
    p.touchControl = function () {
        this.p1.touchEnabled = this.p2.touchEnabled = false;
        egret.setTimeout(function () { this.p1.touchEnabled = this.p2.touchEnabled = true; }, this, 900);
    };
    p.twHandle = function (type, num) {
        if (type === void 0) { type = 0; }
        if (num === void 0) { num = 0; }
        if (type == 1) {
            if (this.p1.y == 0) {
                this.p2.y = this.height;
                //this.p2.alpha = 0;
                this.p2.setBitmapByName("p" + num);
                egret.Tween.get(this.p1).to({ y: -this.p1.height, alpha: 0 }, 800, egret.Ease.cubicInOut);
                egret.Tween.get(this.p2).to({ y: 0, alpha: 1 }, 800, egret.Ease.cubicInOut);
            }
            else if (this.p2.y == 0) {
                this.p1.y = this.height;
                //this.p1.alpha = 0;
                this.p1.setBitmapByName("p" + num);
                egret.Tween.get(this.p2).to({ y: -this.p1.height, alpha: 0 }, 800, egret.Ease.cubicInOut);
                egret.Tween.get(this.p1).to({ y: 0, alpha: 1 }, 800, egret.Ease.cubicInOut);
            }
        }
        else if (type == 2) {
            if (this.p1.y == 0) {
                this.p2.y = -this.p2.height;
                //this.p2.alpha = 0;
                this.p2.setBitmapByName("p" + num);
                egret.Tween.get(this.p1).to({ y: this.p1.height, alpha: 0 }, 800, egret.Ease.cubicInOut);
                egret.Tween.get(this.p2).to({ y: 0, alpha: 1 }, 800, egret.Ease.cubicInOut);
            }
            else if (this.p2.y == 0) {
                this.p1.y = -this.p1.height;
                //this.p1.alpha = 0;
                this.p1.setBitmapByName("p" + num);
                egret.Tween.get(this.p2).to({ y: this.p1.height, alpha: 0 }, 800, egret.Ease.cubicInOut);
                egret.Tween.get(this.p1).to({ y: 0, alpha: 1 }, 800, egret.Ease.cubicInOut);
            }
        }
    };
    return PageTurning;
}(DisplayScrollerScene));
egret.registerClass(PageTurning,'PageTurning');
