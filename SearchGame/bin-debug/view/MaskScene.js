/**
 * Created by cyy on 16/6/14.
 */
var MaskScene = (function (_super) {
    __extends(MaskScene, _super);
    function MaskScene() {
        _super.call(this);
        this.xyArr = new Array();
        this.createScnen();
    }
    var d = __define,c=MaskScene,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay("test5");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.maskLcation, this);
        this.setFullScreen();
    };
    p.maskLcation = function (e) {
        var x = Math.floor(e.localX);
        var y = Math.floor(e.localY);
        console.log("x" + x + "y" + y);
    };
    return MaskScene;
}(DisplayScene));
egret.registerClass(MaskScene,'MaskScene');
//# sourceMappingURL=MaskScene.js.map