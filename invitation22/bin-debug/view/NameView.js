var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 16/3/29.
 */
var NameView = (function (_super) {
    __extends(NameView, _super);
    function NameView() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=NameView;p=c.prototype;
    p.createScnen = function () {
        this.nameTxt = new egret.TextField;
        this.nameTxt.text = ConfigModel.getInstance().getTypeByID() + ConfigModel.getInstance().uNameTxt;
        console.log(ConfigModel.getInstance().getTypeByID());
        //NameView.unameWidth = this.nameTxt.width;
        this.nameTxt.multiline = false;
        this.addChild(this.nameTxt);
    };
    p.setInfo = function (id) {
        switch (id) {
            case 1:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 2:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width / 2;
                this.nameTxt.multiline = false;
                break;
            case 3:
                this.nameTxt.textColor = 0x626262;
                this.nameTxt.size = 26;
                //this.nameTxt.width = 30;
                this.nameTxt.anchorOffsetX = this.nameTxt.width;
                break;
            case 4:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width / 2;
                this.nameTxt.multiline = false;
                break;
            case 5:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 6:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 25;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = 0;
                this.nameTxt.multiline = false;
                break;
            case 7:
                this.nameTxt.textColor = 0xffffff;
                this.nameTxt.size = 30;
                //this.nameTxt.width = NameView.unameWidth;
                this.nameTxt.anchorOffsetX = this.nameTxt.width / 2;
                this.nameTxt.multiline = false;
                break;
        }
        this.nameTxt.text = ConfigModel.getInstance().getTypeByID() + ConfigModel.getInstance().uNameTxt;
    };
    NameView.unameWidth = 0;
    return NameView;
})(DisplayScene);
egret.registerClass(NameView,"NameView");
//# sourceMappingURL=NameView.js.map