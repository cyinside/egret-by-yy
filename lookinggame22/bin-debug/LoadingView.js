/**
 * Created by cyy on 16/3/5.
 */
/**
 * Created by cyy on 15/9/1.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);
    }
    var d = __define,c=LoadingView,p=c.prototype;
    p.onAddtoStage = function (event) {
        this.createView();
    };
    p.createView = function () {
        this.width = 640;
        this.height = 1030;
        var url1 = "resource/assets/loadingbg.jpg";
        var url2 = "resource/assets/quan.png";
        var url3 = "resource/assets/king.png";
        this.bg = new BitmapDisplay;
        this.bg.load(url1);
        this.addChild(this.bg);
        this.quan = new BitmapDisplay;
        this.quan.load(url2);
        this.quan.anchorOffsetX = 228 / 2;
        this.quan.anchorOffsetY = 228 / 2;
        this.quan.x = 320;
        this.quan.y = 360;
        this.addChild(this.quan);
        this.king = new BitmapDisplay;
        this.king.load(url3);
        this.king.anchorOffsetX = 153 / 2;
        this.king.anchorOffsetY = 148 / 2;
        this.king.x = 320;
        this.king.y = 360;
        this.king.scaleX = this.king.scaleY = 1.1;
        this.addChild(this.king);
        this.loading = new egret.TextField;
        this.loading.text = "Loading";
        this.loading.y = 500;
        this.loading.anchorOffsetX = this.loading.width / 2;
        this.loading.x = this.width / 2;
        this.addChild(this.loading);
        this.setFullScreen();
        this.tw();
    };
    p.tw = function () {
        egret.Tween.get(this.quan, { loop: true }).to({ scaleX: 1.05, scaleY: 1.05 }, 600, egret.Ease.sineIn).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.sineIn);
        egret.Tween.get(this.king, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.sineIn).to({ scaleX: 1.1, scaleY: 1.1 }, 600, egret.Ease.sineIn);
    };
    return LoadingView;
}(DisplayScene));
egret.registerClass(LoadingView,'LoadingView');
//# sourceMappingURL=LoadingView.js.map