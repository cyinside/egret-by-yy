/**
 * Created by kevinlam on 15/6/4.
 */
var DisplayScene = (function (_super) {
    __extends(DisplayScene, _super);
    function DisplayScene() {
        _super.call(this);
        this.gestureDefaultTime = 500;
    }
    var d = __define,c=DisplayScene,p=c.prototype;
    p.setFullScreen = function () {
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth() / this.width, GameConfig.curHeight() / this.height);
    };
    p.setHorizontalCenter = function (display) {
        display.x = (this.width - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    p.setVerticalCenter = function (display) {
        display.y = (this.height - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    //touchType 手势类型 1:滑动
    p.addTransformation = function (gestureType, callBack, thisObject) {
        if (callBack === void 0) { callBack = null; }
        if (thisObject === void 0) { thisObject = null; }
        this.gestureType = gestureType;
        this.gestureCallBack = callBack;
        this.gestureThisObject = thisObject;
        var tap;
        switch (this.gestureType) {
            case 1:
                tap = new neoges.SwipeGesture(this);
                tap.addEventListener(neoges.GestureEvent.ENDED, this.onSwipeHandler, this);
                break;
        }
    };
    p.onSwipeHandler = function (event) {
        var target = event;
        if (this.gestureCallBack && this.gestureThisObject) {
            this.gestureCallBack(target.offsetY);
        }
    };
    return DisplayScene;
}(egret.DisplayObjectContainer));
egret.registerClass(DisplayScene,'DisplayScene');
//# sourceMappingURL=DisplayScene.js.map