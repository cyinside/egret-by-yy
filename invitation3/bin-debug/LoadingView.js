/**
 * Created by cyy on 16/4/1.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        _super.call(this);
        this.num1 = 0;
        this.createScnen();
    }
    var d = __define,c=LoadingView,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        var url11 = "resource/assets/loadingbg.png";
        var url22 = "resource/assets/color.jpg";
        this.color1 = new BitmapDisplay;
        this.color1.load(url22);
        this.color1.y = 280;
        this.bg = new BitmapDisplay;
        this.bg.load(url11);
        Global.addEventListener(DataEvent.LOADRETRY, this.countNum, this);
        this.setFullScreen();
    };
    p.countNum = function () {
        this.num1++;
        console.log(this.num1);
        if (this.num1 > 1) {
            this.tw();
            this.addChild(this.color1);
            this.addChild(this.bg);
        }
    };
    p.tw = function () {
        egret.Tween.get(this.color1).to({ y: -620 }, 2000, egret.Ease.sineIn).call(this.tw1, this);
    };
    p.tw1 = function () {
        egret.Tween.get(this.color1).to({ y: 280 }, 2000, egret.Ease.sineIn).call(this.tw, this);
    };
    return LoadingView;
}(DisplayScene));
egret.registerClass(LoadingView,'LoadingView');
//# sourceMappingURL=LoadingView.js.map