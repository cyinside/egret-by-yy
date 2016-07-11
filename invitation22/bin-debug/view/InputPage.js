var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 16/3/31.
 */
var InputPage = (function (_super) {
    __extends(InputPage, _super);
    function InputPage() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=InputPage;p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.inputBg = new BitmapDisplay("inputBg");
        this.addChild(this.inputBg);
        this.inputBut = new BitmapDisplay("inputBut");
        this.inputBut.y = 900;
        this.setHorizontalCenter(this.inputBut);
        this.inputBut.touchEnabled = true;
        this.inputBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.okHandle, this);
        this.addChild(this.inputBut);
        this.nameInput = new egret.TextField;
        this.nameInput.text = "点击输入";
        this.nameInput.touchEnabled = true;
        this.nameInput.type = egret.TextFieldType.INPUT;
        this.nameInput.textAlign = egret.HorizontalAlign.CENTER;
        this.nameInput.width = 200;
        this.nameInput.x = 220;
        this.nameInput.y = 620;
        this.nameInput.size = 26;
        this.nameInput.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.addChild(this.nameInput);
        //
        //this.noInput = new egret.TextField;
        //this.noInput.text = "输入";
        //this.noInput.touchEnabled = true;
        //this.noInput.type = egret.TextFieldType.INPUT;
        //this.noInput.textAlign = egret.HorizontalAlign.CENTER;
        //this.noInput.width = 300;
        //this.noInput.x = 210;
        //this.noInput.y = 725;
        //this.noInput.size = 26;
        //this.noInput.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        //this.addChild(this.noInput);
        //
        //this.butInput = new egret.TextField;
        //this.butInput.text = "输入";
        //this.butInput.touchEnabled = true;
        //this.butInput.type = egret.TextFieldType.INPUT;
        //this.butInput.textAlign = egret.HorizontalAlign.CENTER;
        //this.butInput.width = 300;
        //this.butInput.x = 210;
        //this.butInput.y = 775;
        //this.butInput.size = 26;
        //this.butInput.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        //this.addChild(this.butInput);
        //this.setViewRect();
        this.setFullScreen();
    };
    p.touchHandle = function (e) {
        switch (e.currentTarget) {
            case this.nameInput:
                this.nameInput.text = "";
                break;
            case this.noInput:
                this.noInput.text = "";
                break;
            case this.butInput:
                this.butInput.text = "";
                break;
        }
    };
    p.okHandle = function () {
        if (this.nameInput.text == "" || this.nameInput.text == "输入") {
            alert("请输入名字");
            return;
        }
        //else if(this.noInput.text == ""||this.noInput.text == "输入"){
        //    alert("请输入造句内容");
        //    return;
        //}else if(this.butInput.text == ""||this.butInput.text == "输入"){
        //    alert("请输入造句内容");
        //    return;
        //}
        ConfigModel.getInstance().uNameTxt = this.nameInput.text.substr(0, 5);
        //ConfigModel.getInstance().butTxt = this.butInput.text.substr(0, 10);
        //ConfigModel.getInstance().noTxt = this.noInput.text.substr(0, 10);
        egret.Tween.get(this.inputBut).to({ alpha: 0 }, 700, egret.Ease.sineIn).to({ alpha: 1 }, 600, egret.Ease.sineIn).to({ alpha: 0 }, 700, egret.Ease.sineIn).to({ alpha: 1 }, 600, egret.Ease.sineIn);
        this.goScene2();
    };
    p.retey = function () {
        this.inputBut.touchEnabled = true;
        this.nameInput.text = "点击输入";
        //this.noInput.text = "输入";
        //this.butInput.text = "输入";
    };
    p.goScene2 = function () {
        Global.dispatchEvent(DataEvent.GOTOSCENE2, this);
        this.inputBut.touchEnabled = false;
        this.nameInput.text = "生成中";
    };
    return InputPage;
})(DisplayScene);
egret.registerClass(InputPage,"InputPage");
//# sourceMappingURL=InputPage.js.map