var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var HitTestUtil = (function () {
    function HitTestUtil() {
    }
    var d = __define,c=HitTestUtil;p=c.prototype;
    HitTestUtil.hitTest = function (obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x - 100;
        rect2.y = obj2.y - 100;
        return rect1.intersects(rect2);
    };
    return HitTestUtil;
})();
egret.registerClass(HitTestUtil,"HitTestUtil");
//# sourceMappingURL=HitTestUtil.js.map