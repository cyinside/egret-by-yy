/**
 * Created by Administrator on 2016/6/16.
 */
var PageTween = (function () {
    function PageTween(obj, callBack, callBack1, thisObject) {
        if (callBack === void 0) { callBack = null; }
        if (callBack1 === void 0) { callBack1 = null; }
        if (thisObject === void 0) { thisObject = null; }
        this.obj = obj;
        this.callFunc = callBack;
        this.callFunc1 = callBack1;
        this.thisFunc = thisObject;
        this.creatTw();
    }
    var d = __define,c=PageTween,p=c.prototype;
    p.creatTw = function () {
        this.obj.addTransformation(1, this.sceneTw, this);
    };
    p.twInt = function () {
        this.obj.alpha = 0;
        this.obj.y = 0;
        egret.Tween.get(this.obj).to({ alpha: 1 }, 400);
    };
    p.sceneTw = function (num) {
        switch (num) {
            case -1:
                egret.Tween.get(this.obj).to({ y: -640 }, 500).call(this.callBack, this);
                break;
            case 1:
                egret.Tween.get(this.obj).to({ y: 640 }, 500).call(this.callBack1, this);
                break;
        }
    };
    p.callBack = function () {
        if (this.thisFunc) {
            this.callFunc.call(this.thisFunc);
        }
    };
    p.callBack1 = function () {
        if (this.thisFunc) {
            this.callFunc1.call(this.thisFunc);
        }
    };
    return PageTween;
}());
egret.registerClass(PageTween,'PageTween');
//# sourceMappingURL=PageTween.js.map