var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay("bg3");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        this.text1 = new ETextField();
        this.text1.size = 28;
        this.text1.textAlign = egret.HorizontalAlign.CENTER;
        this.text1.lineSpacing = 10;
        this.text1.y = 390;
        //this.group.addChild(this.text1);
        this.setHorizontalCenter(this.text1);
        this.shareBtn = new BitmapDisplay("share");
        this.group.addChild(this.shareBtn);
        this.shareBtn.touchEnabled = true;
        this.shareBtn.y = 700;
        this.shareBtn.x = 105;
        this.replayBtn = new BitmapDisplay("replay");
        this.group.addChild(this.replayBtn);
        this.replayBtn.touchEnabled = true;
        this.replayBtn.y = 700;
        this.replayBtn.x = 370;
        //
        //this.infoBut = new BitmapDisplay("infoBut");
        //this.group.addChild(this.infoBut);
        //this.infoBut.touchEnabled = true;
        //this.infoBut.y = 820;
        //this.infoBut.scaleY = this.infoBut.scaleX = 0.8;
        //this.infoBut.anchorOffsetX = this.infoBut.width/2;
        //this.infoBut.x = this.width/2;
        this.infobg = new UIBitmapDisplay("bg5");
        this.setHorizontalCenter(this.infobg);
        this.infobg.touchEnabled = true;
        this.infobg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeinfo, this);
        this.infoBut1 = new BitmapDisplay("infoBut");
        this.infoBut1.touchEnabled = true;
        this.infoBut1.y = 680;
        this.setHorizontalCenter(this.infoBut1);
        this.setFullScreen();
        this.setViewRect();
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareHandler, this);
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayHandler, this);
        //this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.oninfoHandler,this);
        this.infoBut1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.makeTel, this);
        this.shareArrow = new BitmapDisplay();
        //this.setScore();
        JSSDK.getWeiXinShareTimeline(2, ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2, ConfigModel.getInstance().wx_title, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img, ConfigModel.getInstance().wx_friend_desx);
        Global.addEventListener(DataEvent.IS_SHARE, this.oninfoHandler, this);
    }
    var d = __define,c=EndScene,p=c.prototype;
    p.setScore = function () {
        var score = ConfigModel.getInstance().roleInfo.score;
        this.scoreInfo = ConfigModel.getInstance().getLevelByScore(ConfigModel.getInstance().roleInfo.score);
        this.title = new egret.Bitmap();
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        loader.load(new egret.URLRequest("resource/assets/title/" + this.scoreInfo.id + ".png"));
        var str1 = this.scoreInfo.text1.replace("xx", score.toString());
        var str2 = this.scoreInfo.text2.replace("xx", score.toString());
        this.text1.setText(str1);
        this.setHorizontalCenter(this.text1);
    };
    p.loadComplete = function (event) {
        var loader = event.target;
        this.title = new egret.Bitmap(loader.data);
        this.addChild(this.title);
        this.setHorizontalCenter(this.title);
        this.title.y = 200;
    };
    p.onShareHandler = function (e) {
        this.shareArrow.setBitmapByName("share_arrow");
        this.addChild(this.shareArrow);
        this.shareArrow.x = 530;
        this.shareArrow.y = 50;
        egret.Tween.get(this.shareArrow, { loop: true }).to({ alpha: 0 }, 500, egret.Ease.sineInOut).to({ alpha: 1 }, 500, egret.Ease.sineInOut);
    };
    p.onReplayHandler = function (e) {
        egret.Tween.removeAllTweens();
        var event = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 2;
        Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
    };
    p.oninfoHandler = function () {
        if (ConfigModel.getInstance().Is_win == true) {
            egret.setTimeout(function () {
                this.removeChild(this.shareArrow);
                this.group.addChild(this.infobg);
                this.group.addChild(this.infoBut1);
            }, this, 1000);
        }
    };
    p.removeinfo = function () {
        this.group.removeChild(this.infobg);
        this.group.removeChild(this.infoBut1);
    };
    p.makeTel = function () {
        window.location.href = "tel:18620988188";
    };
    p.remove = function () {
        this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareHandler, this);
        this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayHandler, this);
    };
    return EndScene;
}(DisplayScrollerScene));
egret.registerClass(EndScene,'EndScene');
//# sourceMappingURL=EndScene.js.map