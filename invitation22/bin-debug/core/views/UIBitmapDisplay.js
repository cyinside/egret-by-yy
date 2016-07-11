var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var UIBitmapDisplay = (function (_super) {
    __extends(UIBitmapDisplay, _super);
    function UIBitmapDisplay(name) {
        if (name === void 0) { name = ""; }
        _super.call(this);
        if (name != "")
            this.setBitmapByName(name);
    }
    var d = __define,c=UIBitmapDisplay;p=c.prototype;
    p.setBitmapByName = function (name) {
        var texture = RES.getRes(name);
        this.texture = texture;
        return this.texture;
    };
    p.setBitmapByTexture = function (texture) {
        this.texture = texture;
    };
    p.load = function (url) {
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        loader.load(new egret.URLRequest(url));
    };
    p.loadComplete = function (event) {
        var loader = event.target;
        this.texture = loader.data;
    };
    p.dispose = function () {
        if (this.texture) {
            var texture = this.texture;
            texture.dispose();
        }
    };
    p.setFullScreen = function () {
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth() / this.width, GameConfig.curHeight() / this.height);
    };
    return UIBitmapDisplay;
})(eui.Image);
egret.registerClass(UIBitmapDisplay,"UIBitmapDisplay");
//# sourceMappingURL=UIBitmapDisplay.js.map