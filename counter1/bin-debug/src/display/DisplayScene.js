/**
 * Created by kevinlam on 15/6/4.
 */
var DisplayScene = (function (_super) {
    __extends(DisplayScene, _super);
    function DisplayScene() {
        _super.call(this);
    }
    var __egretProto__ = DisplayScene.prototype;
    __egretProto__.setFullScreen = function () {
        this.scaleX = this.scaleY = Math.max(StageUtil.STAGE_WIDTH / this.width, StageUtil.STAGE_HEIGHT / this.height);
    };
    __egretProto__.setHorizontalCenter = function (display) {
        display.x = (this.width - display.width) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    __egretProto__.setVerticalCenter = function (display) {
        display.y = (this.height - display.height) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    return DisplayScene;
})(egret.DisplayObjectContainer);
DisplayScene.prototype.__class__ = "DisplayScene";
