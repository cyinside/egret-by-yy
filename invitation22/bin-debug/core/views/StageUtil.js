var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var StageUtil = (function () {
    function StageUtil() {
    }
    var d = __define,c=StageUtil;p=c.prototype;
    StageUtil.setHorizontalCenter = function (display) {
        display.x = (GameConfig.curWidth() - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    StageUtil.setVerticalCenter = function (display) {
        display.y = (GameConfig.curHeight() - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    return StageUtil;
})();
egret.registerClass(StageUtil,"StageUtil");
//# sourceMappingURL=StageUtil.js.map