var StageUtil = (function () {
    function StageUtil() {
    }
    var __egretProto__ = StageUtil.prototype;
    StageUtil.init = function (stage) {
        StageUtil.STAGE_WIDTH = stage.stageWidth;
        StageUtil.STAGE_HEIGHT = stage.stageHeight;
    };
    StageUtil.setHorizontalCenter = function (display) {
        display.x = (StageUtil.STAGE_WIDTH - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    StageUtil.setVerticalCenter = function (display) {
        display.y = (StageUtil.STAGE_HEIGHT - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    return StageUtil;
})();
StageUtil.prototype.__class__ = "StageUtil";
