var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameApp,p=c.prototype;
    p.onAddToStage = function (event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE, RES.PropertiesAnalyzer);
        //JSSDK.getSignPackage(this.onLoadComplete,this);
        this.onLoadComplete();
    };
    p.onLoadComplete = function () {
        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingUI();
        this.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            //JSSDK.getSignPackage();
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            this.createGameScene();
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);
        egret.setTimeout(this.getWeixin, this, 2000);
    };
    p.getWeixin = function () {
        var dateT = this.scnen1.curentTime1().toString();
        var stitle = ConfigModel.getInstance().getResultInfoById(parseInt(this.scnen1.luckyNum));
        JSSDK.getWeiXinShareAppMessage(2, dateT + "," + stitle.text, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img, ConfigModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(2, dateT + "," + stitle.text, ConfigModel.getInstance().wx_share_link, ConfigModel.getInstance().wx_share_img);
    };
    return GameApp;
})(egret.DisplayObjectContainer);
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map