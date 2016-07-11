/**
 * Created by kevinlam on 15/6/4.
 */
var BitmapDisplay = (function (_super) {
    __extends(BitmapDisplay, _super);
    function BitmapDisplay() {
        _super.call(this);
        this.bitmap = new egret.Bitmap;
    }
    var __egretProto__ = BitmapDisplay.prototype;
    __egretProto__.setBitmapByName = function (name) {
        this.bitmap = this.createBitmapByName(name);
        this.addChild(this.bitmap);
    };
    __egretProto__.createBitmapByName = function (name) {
        var texture = RES.getRes(name);
        this.bitmap.texture = texture;
        return this.bitmap;
    };
    __egretProto__.setBitmapByTexture = function (texture) {
        this.bitmap.texture = texture;
        this.addChild(this.bitmap);
    };
    __egretProto__.load = function (url) {
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        loader.load(new egret.URLRequest(url));
    };
    __egretProto__.loadComplete = function (event) {
        var loader = event.target;
        this.bitmap = new egret.Bitmap(loader.data);
        this.addChild(this.bitmap);
        this.bitmap.width = this.size_width;
        this.bitmap.height = this.size_height;
    };
    __egretProto__.dispose = function () {
        if (this.bitmap && this.bitmap.texture)
            this.bitmap.texture.dispose();
    };
    __egretProto__.setSize = function (width, height) {
        this.bitmap.width = width;
        this.bitmap.height = height;
        this.size_width = width;
        this.size_height = height;
    };
    __egretProto__.setFullScreen = function () {
        this.bitmap.scaleX = this.bitmap.scaleY = Math.max(StageUtil.STAGE_WIDTH / this.bitmap.width, StageUtil.STAGE_HEIGHT / this.bitmap.height);
    };
    return BitmapDisplay;
})(egret.DisplayObjectContainer);
BitmapDisplay.prototype.__class__ = "BitmapDisplay";
