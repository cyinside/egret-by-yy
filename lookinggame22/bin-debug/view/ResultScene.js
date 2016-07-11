/**
 * Created by cyy on 16/3/4.
 */
var ResultScene = (function (_super) {
    __extends(ResultScene, _super);
    function ResultScene() {
        _super.call(this);
        this.createScene();
    }
    var d = __define,c=ResultScene,p=c.prototype;
    p.createScene = function () {
        this.result = new BitmapDisplay("result1");
        this.addChild(this.result);
        //
        //this.infoBut = new BitmapDisplay("infoBut");
        //this.addChild(this.infoBut);
        //this.setHorizontalCenter(this.infoBut);
        //this.infoBut.y = 800;
        //this.infoBut.touchEnabled = true;
        //this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showInfo,this);
    };
    p.showInfo = function () {
        //window.location.href="../../index2.html";
        //Global.dispatchEvent(DataEvent.SHOWINFO,this);
        Global.dispatchEvent(DataEvent.HIDETIME, this);
    };
    return ResultScene;
}(DisplayScene));
egret.registerClass(ResultScene,'ResultScene');
//# sourceMappingURL=ResultScene.js.map