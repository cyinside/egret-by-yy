/**
 * Created by Administrator on 2016/6/17.
 */
var AwordPage1 = (function (_super) {
    __extends(AwordPage1, _super);
    function AwordPage1() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=AwordPage1,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.awordPage1 = new AwordPage;
        this.group.addChild(this.awordPage1);
        this.awordPage1.setPage(1);
        this.setFullScreen();
        this.setViewRect();
    };
    return AwordPage1;
}(DisplayScrollerScene));
egret.registerClass(AwordPage1,'AwordPage1');
//# sourceMappingURL=AwordPage1.js.map