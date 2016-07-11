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
var Tdcode = (function (_super) {
    __extends(Tdcode, _super);
    function Tdcode() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Tdcode;p=c.prototype;
    p.createScnen = function () {
        var gameDiv = document.getElementById("gameDiv");
        var myImg = document.createElement("img");
        myImg.src = "resource/assets/img1.png";
        myImg.style.width = "500";
        myImg.style.height = "500";
        myImg.style.position = "absolute";
        gameDiv.appendChild(myImg);
    };
    return Tdcode;
})(DisplayScene);
egret.registerClass(Tdcode,"Tdcode");
//# sourceMappingURL=Tdcode.js.map