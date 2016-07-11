/**
 * Created by cyy on 16/5/20.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=LoadingView,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay("bg");
        this.addChild(this.bg);
        this.heart = new BitmapDisplay("load");
        this.heart.anchorOffsetX = this.heart.width / 2;
        this.heart.anchorOffsetY = this.heart.height / 2;
        this.heart.x = this.width / 2;
        this.heart.y = this.height / 2;
        this.heart.rotation = -15;
        this.addChild(this.heart);
        this.textField1 = new egret.TextField();
        this.textField1.size = 30;
        this.textField1.textColor = 0xFFFFFF;
        this.addChild(this.textField1);
        this.textField1.text = "Loading...";
        this.textField1.textAlign = egret.HorizontalAlign.LEFT;
        this.setHorizontalCenter(this.textField1);
        this.textField1.y = 650;
        this.setFullScreen();
        egret.Tween.get(this.heart, { loop: true }).to({ rotation: 30 }, 800, egret.Ease.sineIn).to({ rotation: -15 }, 800, egret.Ease.sineIn);
    };
    p.setProgress = function (current, total) {
        this.textField1.text = Math.floor((current / total) * 100) + "%";
        this.setHorizontalCenter(this.textField1);
    };
    return LoadingView;
}(DisplayScene));
egret.registerClass(LoadingView,'LoadingView');
