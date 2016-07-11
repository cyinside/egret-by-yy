/**
 * Created by kevinlam on 15/6/4.
 */
var DisplayScene = (function (_super) {
    __extends(DisplayScene, _super);
    function DisplayScene() {
        _super.call(this);
    }
    var d = __define,c=DisplayScene,p=c.prototype;
    p.setFullScreen = function () {
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth() / this.width, GameConfig.curHeight() / this.height);
    };
    p.setHorizontalCenter = function (display) {
        display.x = (this.width - display.width) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    p.setVerticalCenter = function (display) {
        display.y = (this.height - display.height) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    return DisplayScene;
}(egret.DisplayObjectContainer));
egret.registerClass(DisplayScene,'DisplayScene');
//# sourceMappingURL=DisplayScene.js.map