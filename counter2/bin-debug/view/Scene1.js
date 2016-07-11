/**
 * Created by cyy on 16/4/27.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.beginX = 0;
        this.beginY = 0;
        this.endX = 0;
        this.endY = 0;
        this.num = 1;
        this.maxPageNum = 3;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createScnen();
    };
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.p1 = new UIBitmapDisplay("p1");
        this.addChild(this.p1);
        this.p2 = new UIBitmapDisplay;
        this.p2.y = this.height;
        this.addChild(this.p2);
        this.p1.touchEnabled = true;
        this.p2.touchEnabled = true;
        this.p1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.p1.addEventListener(egret.TouchEvent.TOUCH_END, this.touchend, this);
        this.p2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.p2.addEventListener(egret.TouchEvent.TOUCH_END, this.touchend, this);
        this.down = new ForWardView;
        this.down.x = 500;
        this.down.y = this.height - this.down.height - 60;
        this.addChild(this.down);
        this.setViewRect();
        this.setFullScreen();
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
            if (this.num > this.maxPageNum) {
                var data = new DataEvent(DataEvent.CHANGE_SCENE);
                data.sceneID = 2;
                Global.dispatchEvent(DataEvent.CHANGE_SCENE, data);
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
        console.log("touchControl");
        this.p1.touchEnabled = this.p2.touchEnabled = false;
        egret.setTimeout(function () { this.p1.touchEnabled = this.p2.touchEnabled = true; }, this, 800);
        console.log(this.p1.touchEnabled);
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
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
