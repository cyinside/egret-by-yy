/**
 * Created by cyy on 16/4/10.
 */
var ForWardView = (function (_super) {
    __extends(ForWardView, _super);
    function ForWardView() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=ForWardView,p=c.prototype;
    p.createScnen = function () {
        this.forWard = new BitmapDisplay("forward");
        this.addChild(this.forWard);
        egret.Tween.get(this.forWard, { loop: true }).to({ y: -15 }, 800, egret.Ease.cubicInOut).to({ y: 0 }, 800, egret.Ease.cubicInOut);
    };
    return ForWardView;
}(DisplayScene));
egret.registerClass(ForWardView,'ForWardView');
