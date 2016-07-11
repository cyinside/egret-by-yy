var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 16/3/29.
 */
var ShowScene = (function (_super) {
    __extends(ShowScene, _super);
    function ShowScene() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=ShowScene;p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        var url1 = "resource/assets/p" + ConfigModel.getInstance().idNum + "/" + ConfigModel.getInstance().idNum + ConfigModel.getInstance().typeNum + ".jpg";
        this.showPage = new BitmapDisplay;
        this.showPage.load(url1);
        this.addChildByScroller(this.showPage);
        this.unameTXT = new NameView;
        this.addChildByScroller(this.unameTXT);
        this.uheadIMG = new HeadImg;
        this.addChildByScroller(this.uheadIMG);
        this.startBut = new BitmapDisplay("startbut1");
        this.startBut.y = 860;
        this.setHorizontalCenter(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.addChildByScroller(this.startBut);
        egret.Tween.get(this.startBut, { loop: true }).to({ alpha: 0 }, 1200, egret.Ease.sineIn).to({ alpha: 1 }, 600, egret.Ease.sineIn).wait(500);
        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.HEADIMGCOMP, this.headImgReady, this);
        Global.addEventListener(DataEvent.GOTOSCENE2, this.headImgReady, this);
    };
    p.touchHandle = function (e) {
        Global.dispatchEvent(DataEvent.REMOVESHOWSCENE, this);
        this.removeChildByScroller(this.startBut);
    };
    p.headImgReady = function () {
        this.setPage1(ConfigModel.getInstance().idNum);
    };
    p.setPage1 = function (num) {
        this.unameTXT.setInfo(num);
        this.uheadIMG.setHInfo(num);
        switch (num) {
            case 1:
                this.unameTXT.y = 700;
                this.unameTXT.x = 30;
                this.uheadIMG.x = 116;
                this.uheadIMG.y = 590;
                break;
            case 2:
                this.unameTXT.y = 230;
                this.unameTXT.x = this.width - 146;
                this.uheadIMG.x = this.width - 136;
                this.uheadIMG.y = 123;
                break;
            case 3:
                this.unameTXT.y = 140;
                this.unameTXT.x = 370;
                this.uheadIMG.x = 460;
                this.uheadIMG.y = 141;
                break;
        }
        ConfigModel.getInstance().updateShare1();
    };
    return ShowScene;
})(DisplayScrollerScene);
egret.registerClass(ShowScene,"ShowScene");
//# sourceMappingURL=ShowScene.js.map