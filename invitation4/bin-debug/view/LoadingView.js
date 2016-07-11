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
        this.rect = new egret.Shape;
        this.rect.graphics.beginFill(0x000000, 0.6);
        this.rect.graphics.drawRect(0, 0, this.width, this.height);
        this.rect.graphics.endFill();
        //this.addChild(this.rect);
        this.heart = new BitmapDisplay("heart");
        this.heart.anchorOffsetX = this.heart.width / 2;
        this.heart.anchorOffsetY = this.heart.height / 2;
        this.heart.x = this.width / 2;
        this.heart.y = this.height / 2;
        this.addChild(this.heart);
        this.textField1 = new egret.TextField();
        this.textField1.size = 30;
        this.textField1.textColor = 0x870505;
        this.addChild(this.textField1);
        this.textField1.text = "Loading...";
        this.textField1.textAlign = egret.HorizontalAlign.LEFT;
        this.setHorizontalCenter(this.textField1);
        this.textField1.y = 600;
        this.setFullScreen();
        egret.Tween.get(this.heart, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 300, egret.Ease.bounceInOut).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.sineIn).wait(800);
    };
    p.setProgress = function (current, total) {
        this.textField1.text = Math.floor((current / total) * 100) + "%";
        this.setHorizontalCenter(this.textField1);
    };
    return LoadingView;
}(DisplayScene));
egret.registerClass(LoadingView,'LoadingView');
//# sourceMappingURL=LoadingView.js.map