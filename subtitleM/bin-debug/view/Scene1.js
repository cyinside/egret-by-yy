var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.num = 6;
        this.createScnen();
    }
    var d = __define,c=Scene1;p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.addChild(this.bg1);
        this.inputTXT = new egret.TextField;
        this.inputTXT.text = "输入";
        this.inputTXT.size = 40;
        this.inputTXT.x = 100;
        this.inputTXT.y = 350;
        this.inputTXT.anchorOffsetY = this.inputTXT.height / 2;
        this.inputTXT.height = 200;
        this.inputTXT.width = 450;
        this.inputTXT.textColor = 0x000000;
        this.inputTXT.touchEnabled = true;
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputTXT.wordWrap = true;
        this.inputTXT.multiline = true;
        this.addChild(this.inputTXT);
        //this.inputTXT.maxChars = 15;
        this.inputTXT.addEventListener(egret.TouchEvent.TOUCH_TAP, this.txtHandle, this);
        this.inputBtn = new BitmapDisplay;
        this.inputBtn.setBitmapByName("start");
        this.setHorizontalCenter(this.inputBtn);
        this.inputBtn.y = 700;
        this.addChild(this.inputBtn);
        this.inputBtn.touchEnabled = true;
        this.inputBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.setFullScreen();
        this.timeOut1 = new egret.Timer(1000, 5);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER, this.timeControl1, this);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeControl, this);
    };
    p.txtHandle = function () {
        this.inputTXT.text = "";
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputTXT.wordWrap = true;
        this.inputTXT.multiline = true;
        //this.inputTXT.maxChars = 15;
    };
    p.touchHandle = function () {
        if (this.inputTXT.text == "输入" || this.inputTXT.text == "") {
            alert("请输入内容");
        }
        else {
            console.log(this.inputTXT.text);
            __global.sendMessageToServer(this.inputTXT.text);
            if (this.inputTXT.text.length > 15) {
                alert("字数超出15字");
                return;
            }
            this.inputTXT.text = "请等待";
            this.inputTXT.type = egret.TextFieldType.DYNAMIC;
            this.inputBtn.touchEnabled = false;
            this.timeOut1.start();
        }
    };
    p.timeControl = function () {
        this.inputTXT.text = "输入";
        this.inputTXT.type = egret.TextFieldType.INPUT;
        this.inputBtn.touchEnabled = true;
        this.num = 6;
        this.timeOut1.reset();
        this.timeOut1.stop();
    };
    p.timeControl1 = function () {
        this.num--;
        this.inputTXT.text = "请等待" + this.num.toString() + "秒";
        this.inputTXT.type = egret.TextFieldType.DYNAMIC;
    };
    return Scene1;
})(DisplayScene);
egret.registerClass(Scene1,"Scene1");
