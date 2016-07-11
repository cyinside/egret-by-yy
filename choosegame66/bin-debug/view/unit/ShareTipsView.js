var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ShareTipsView = (function (_super) {
    __extends(ShareTipsView, _super);
    function ShareTipsView() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=ShareTipsView;p=c.prototype;
    p.initView = function () {
        this.width = 640;
        this.height = 1030;
        this.shape = new egret.Shape();
        this.shape.graphics.beginFill(0x000000, 0.8);
        this.shape.graphics.drawRect(0, 0, this.width, this.height);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
        this.img = new BitmapDisplay();
        this.img.setBitmapByName("shareTips");
        this.addChild(this.img);
        this.img.x = 250;
        this.img.y = 20;
        this.contentText = new egret.TextField();
        this.contentText.textColor = 0xffffff;
        this.contentText.size = 35;
        this.contentText.bold = true;
        this.contentText.x = 170;
        this.contentText.y = 350;
        this.addChild(this.contentText);
    };
    p.setType = function (type) {
        if (type == 1) {
            this.contentText.text = QuestionModel.getInstance().wx_share_friend;
        }
        else {
            this.contentText.text = QuestionModel.getInstance().wx_share_monent;
        }
    };
    return ShareTipsView;
})(egret.DisplayObjectContainer);
egret.registerClass(ShareTipsView,"ShareTipsView");
//# sourceMappingURL=ShareTipsView.js.map