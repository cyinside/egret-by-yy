/**
 * Created by kevinlam on 15/6/4.
 */
var BitmapDisplay = (function (_super) {
    __extends(BitmapDisplay, _super);
    function BitmapDisplay(name) {
        if (name === void 0) { name = ""; }
        _super.call(this);
        this.bitmap = new egret.Bitmap;
        if (name != "")
            this.setBitmapByName(name);
    }
    var d = __define,c=BitmapDisplay,p=c.prototype;
    p.setBitmapByName = function (name) {
        this.bitmap = this.createBitmapByName(name);
        this.addChild(this.bitmap);
    };
    p.createBitmapByName = function (name) {
        var texture = RES.getRes(name);
        this.bitmap.texture = texture;
        return this.bitmap;
    };
    p.setBitmapByTexture = function (texture) {
        this.bitmap.texture = texture;
        this.addChild(this.bitmap);
    };
    p.load = function (url) {
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        loader.load(new egret.URLRequest(url));
    };
    p.loadComplete = function (event) {
        var loader = event.target;
        this.bitmap = new egret.Bitmap(loader.data);
        this.addChild(this.bitmap);
        this.bitmap.width = this.size_width;
        this.bitmap.height = this.size_height;
        Global.dispatchEvent(DataEvent.LOADRETRY, this);
    };
    p.dispose = function () {
        //if(this.bitmap && this.bitmap.texture)
        //    this.bitmap.texture.
    };
    p.setFullScreen = function () {
        this.bitmap.scaleX = this.bitmap.scaleY = Math.max(GameConfig.curWidth() / this.bitmap.width, GameConfig.curHeight() / this.bitmap.height);
    };
    return BitmapDisplay;
}(egret.DisplayObjectContainer));
egret.registerClass(BitmapDisplay,'BitmapDisplay');
//# sourceMappingURL=BitmapDisplay.js.map