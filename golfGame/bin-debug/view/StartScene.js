/**
 * Created by Administrator on 2016/7/7.
 */
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=StartScene,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay;
        this.bg.setBitmapByName("bg1");
        this.addChild(this.bg);
        this.startBut = new BitmapDisplay;
        this.startBut.setBitmapByName("startBut");
        this.startBut.y = 950;
        this.startBut.anchorOffsetX = this.startBut.width / 2;
        this.startBut.anchorOffsetY = this.startBut.height / 2;
        this.startBut.x = this.width / 2;
        this.startBut.touchEnabled = true;
        this.addChild(this.startBut);
        this.awardBut = new BitmapDisplay("awardBut");
        this.awardBut.x = 30;
        this.awardBut.y = 620;
        this.awardBut.touchEnabled = true;
        this.addChild(this.awardBut);
        this.ruleBut = new BitmapDisplay("ruleBut");
        this.ruleBut.x = 30;
        this.ruleBut.y = 690;
        this.ruleBut.touchEnabled = true;
        this.addChild(this.ruleBut);
        this.infoView = new InfoView;
        this.awardView = new AwardScene;
        this.removeBut = new BitmapDisplay("removeBut");
        this.removeBut.x = this.width - this.removeBut.width - 50;
        this.removeBut.y = 50;
        this.removeBut.touchEnabled = true;
        this.removeBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeAward, this);
        this.setFullScreen();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        Global.addEventListener(DataEvent.REMOVEAWARD, this.removeAward, this);
    };
    p.touchHandle = function (e) {
        switch (e.target) {
            case this.startBut:
                SceneUtil.changeScene(2);
                break;
            case this.ruleBut:
                this.infoView.setInfo(1, this);
                this.addChild(this.infoView);
                break;
            case this.awardBut:
                this.addChild(this.awardView);
                this.addChild(this.removeBut);
                break;
        }
    };
    p.removeAward = function () {
        this.removeChild(this.awardView);
        this.removeChild(this.removeBut);
    };
    return StartScene;
}(DisplayScene));
egret.registerClass(StartScene,'StartScene');
//# sourceMappingURL=StartScene.js.map