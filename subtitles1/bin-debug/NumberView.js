var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var NumberView = (function (_super) {
    __extends(NumberView, _super);
    function NumberView() {
        _super.call(this);
        this.free = true;
        this.speedNum = 0;
        this.txt = new egret.TextField();
        this.txt.size = 30;
        this.txt.bold = true;
        //this.txt.stroke = 1;
        //this.txt.strokeColor = 0xFFFFFF;
        this.txt.bold = true;
        this.addChild(this.txt);
        this.free = true;
    }
    var d = __define,c=NumberView;p=c.prototype;
    p.setInfo = function (txt, free, y, size, color) {
        this.txt.text = txt;
        this.free = free;
        this.txt.y = y;
        this.txt.size = size;
        switch (color) {
            case 1:
                this.txt.textColor = 0xf58220;
                break;
            case 2:
                this.txt.textColor = 0x7fb80e;
                break;
            case 3:
                this.txt.textColor = 0x50b7c1;
                break;
            case 4:
                this.txt.textColor = 0xffd400;
                break;
            case 5:
                this.txt.textColor = 0x33a3dc;
                break;
        }
    };
    return NumberView;
})(egret.DisplayObjectContainer);
egret.registerClass(NumberView,"NumberView");
