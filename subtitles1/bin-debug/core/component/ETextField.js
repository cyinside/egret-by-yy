/**
  * 多颜色文本类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法：this.textTF.setText("haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa");
  */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var ETextField = (function (_super) {
    __extends(ETextField, _super);
    function ETextField() {
        _super.call(this);
    }
    var d = __define,c=ETextField;p=c.prototype;
    //demo
    //"haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
    p.setText = function (str) {
        if (str === void 0) { str = ""; }
        var styleParser = new egret.HtmlTextParser();
        this.textFlow = styleParser.parser(str);
    };
    return ETextField;
})(egret.TextField);
egret.registerClass(ETextField,"ETextField");
