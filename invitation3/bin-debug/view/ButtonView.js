/**
 * Created by cyy on 16/4/9.
 */
var ButtonView = (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView(num) {
        _super.call(this);
        this.createScnen(num);
    }
    var d = __define,c=ButtonView,p=c.prototype;
    p.createScnen = function (num) {
        this.butBg = new BitmapDisplay("but" + num.toString());
        this.butBg.touchEnabled = true;
        this.addChild(this.butBg);
    };
    return ButtonView;
}(DisplayScene));
egret.registerClass(ButtonView,'ButtonView');
//# sourceMappingURL=ButtonView.js.map