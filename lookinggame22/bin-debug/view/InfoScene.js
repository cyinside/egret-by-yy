/**
 * Created by cyy on 16/3/4.
 */
var InfoScene = (function (_super) {
    __extends(InfoScene, _super);
    function InfoScene() {
        _super.call(this);
        this.createScene();
    }
    var d = __define,c=InfoScene,p=c.prototype;
    p.createScene = function () {
        //this.width = 640;
        //this.height = 1030;
        this.info = new BitmapDisplay("info");
        this.addChild(this.info);
    };
    return InfoScene;
}(DisplayScene));
egret.registerClass(InfoScene,'InfoScene');
//# sourceMappingURL=InfoScene.js.map