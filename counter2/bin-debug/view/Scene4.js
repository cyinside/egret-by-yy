/**
 * Created by cyy on 16/4/27.
 */
var Scene4 = (function (_super) {
    __extends(Scene4, _super);
    function Scene4() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene4,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createScnen();
    };
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay("p8");
        this.addChild(this.bg);
        this.setViewRect();
        this.setFullScreen();
    };
    return Scene4;
}(DisplayScrollerScene));
egret.registerClass(Scene4,'Scene4');
