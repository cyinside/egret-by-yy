var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var AnswerView = (function (_super) {
    __extends(AnswerView, _super);
    function AnswerView(id, id2) {
        _super.call(this);
        this.id = id;
        this.id2 = id2;
        this.initView();
    }
    var d = __define,c=AnswerView;p=c.prototype;
    p.initView = function () {
        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("btn" + this.id2.toString() + this.id.toString());
        console.log("btn" + this.id2.toString() + this.id.toString());
        //this.bg.width = this.bg.width * 0.9;
        //this.bg.height = this.bg.height * 0.9;
        //this.bg.scaleX = 1.2;
        this.addChild(this.bg);
        this.contentText = new egret.TextField();
        this.contentText.textColor = 0xfff600;
        this.contentText.fontFamily = "黑体";
        this.contentText.lineSpacing = 4;
        this.contentText.width = 250;
        this.contentText.bold = true;
        this.contentText.size = 28;
        this.contentText.x = 35;
        this.contentText.y = 30;
        this.contentText.textAlign = egret.HorizontalAlign.CENTER;
        //this.addChild(this.contentText);
    };
    p.setInfo = function (answerInfo) {
        this._answerInfo = answerInfo;
        //this.contentText.text = answerInfo.text;
    };
    d(p, "answerInfo"
        ,function () {
            return this._answerInfo;
        }
    );
    return AnswerView;
})(egret.DisplayObjectContainer);
egret.registerClass(AnswerView,"AnswerView");
//# sourceMappingURL=AnswerView.js.map