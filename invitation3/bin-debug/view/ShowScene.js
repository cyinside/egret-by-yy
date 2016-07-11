/**
 * Created by cyy on 16/4/7.
 */
/**
 * Created by cyy on 16/4/7.
 */
var ShowScene = (function (_super) {
    __extends(ShowScene, _super);
    function ShowScene() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=ShowScene,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay("showBg");
        this.addChild(this.bg);
        this.contTXT = new egret.TextField;
        this.contTXT.y = 320;
        this.contTXT.text = ConfigModel.getInstance().contTxt;
        this.contTXT.anchorOffsetX = this.contTXT.width / 2;
        this.contTXT.x = this.width / 2;
        this.addChild(this.contTXT);
        this.uheadIMG = new HeadImg;
        this.addChild(this.uheadIMG);
        this.uheadIMG.x = this.width / 2;
        this.uheadIMG.y = 128;
        this.startBut = new BitmapDisplay("startBut");
        this.startBut.anchorOffsetX = this.startBut.width / 2;
        this.startBut.anchorOffsetY = this.startBut.height / 2;
        this.startBut.scaleX = this.startBut.scaleY = 0;
        this.startBut.x = this.width / 2;
        this.startBut.y = 580;
        this.startBut.touchEnabled = true;
        this.addChild(this.startBut);
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changePage, this);
        this.setFullScreen();
        ConfigModel.getInstance().updateShare1();
        var tw = function () { egret.Tween.get(this.startBut).to({ scaleX: 1, scaleY: 1 }, 800, egret.Ease.backInOut); };
        egret.setTimeout(tw, this, 800);
    };
    p.changePage = function () {
        Global.dispatchEvent(DataEvent.GOTOSCENE1, this);
    };
    return ShowScene;
}(DisplayScene));
egret.registerClass(ShowScene,'ShowScene');
//# sourceMappingURL=ShowScene.js.map