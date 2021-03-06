/**
 * Created by kevinlam on 15/6/4.
 */
var BitmapDisplay = (function (_super) {
    __extends(BitmapDisplay, _super);
    function BitmapDisplay(name) {
        if (name === void 0) { name = ""; }
        _super.call(this);
        if (name != "")
            this.setBitmapByName(name);
    }
    var d = __define,c=BitmapDisplay,p=c.prototype;
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
    return BitmapDisplay;
})(egret.Bitmap);
egret.registerClass(BitmapDisplay,'BitmapDisplay');
//# sourceMappingURL=BitmapDisplay.js.map