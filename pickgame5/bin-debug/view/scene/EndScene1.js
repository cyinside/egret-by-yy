/**
 * Created by cyy on 16/5/12.
 */
var EndScene1 = (function (_super) {
    __extends(EndScene1, _super);
    function EndScene1() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay("bg4");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        //
        //this.text1 = new ETextField();
        //this.text1.size = 28;
        //this.text1.textAlign = egret.HorizontalAlign.CENTER;
        //this.text1.lineSpacing = 10;
        //this.text1.y = 390;
        //this.addChild(this.text1);
        //this.setHorizontalCenter(this.text1);
        //
        //this.shareBtn = new BitmapDisplay("share");
        //this.group.addChild(this.shareBtn);
        //this.shareBtn.touchEnabled = true;
        //this.shareBtn.y = 660;
        //this.shareBtn.x = 120;
        this.replayBtn = new BitmapDisplay("replay");
        this.group.addChild(this.replayBtn);
        this.replayBtn.touchEnabled = true;
        this.setHorizontalCenter(this.replayBtn);
        this.replayBtn.y = 750;
        //this.replayBtn.x = 321;
        this.setFullScreen();
        this.setViewRect();
        //this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayHandler, this);
        this.shareArrow = new BitmapDisplay();
        //this.setScore();
        //JSSDK.getWeiXinShareTimeline(str2,ConfigModel.getInstance().wx_link, ConfigModel.getInstance().wx_share_img);
        //JSSDK.getWeiXinShareAppMessage(ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_link,
        //    ConfigModel.getInstance().wx_share_img,str2);
    }
    var d = __define,c=EndScene1,p=c.prototype;
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
    p.remove = function () {
        //this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        //this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onReplayHandler,this);
    };
    return EndScene1;
}(DisplayScrollerScene));
egret.registerClass(EndScene1,'EndScene1');
//# sourceMappingURL=EndScene1.js.map