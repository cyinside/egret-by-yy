var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/24.
 */
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        _super.call(this);
        var id = Math.floor(Math.random() * 6 + 1);
        this.ets = new BitmapDisplay;
        //var id:number = 1;
        this.ets = new BitmapDisplay();
        this.ets.setBitmapByName("ets" + id.toString());
        this.ets.scaleX = this.ets.scaleY = 0.8;
        this.ets.touchEnabled = true;
        this.addChild(this.ets);
        this.boom = new BitmapDisplay;
        this.boom.setBitmapByName("boom");
    }
    var d = __define,c=Role;p=c.prototype;
    p.showBoom = function () {
        this.addChild(this.boom);
        egret.Tween.removeTweens(this.ets);
    };
    p.hideBoom = function () {
        this.removeChild(this.boom);
    };
    return Role;
})(DisplayScene);
egret.registerClass(Role,"Role");
//# sourceMappingURL=Role.js.map