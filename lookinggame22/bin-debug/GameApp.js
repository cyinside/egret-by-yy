var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameApp,p=c.prototype;
    p.onAddToStage = function (event) {
        this.loadingView1 = new LoadingView();
        this.addChild(this.loadingView1);
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE, RES.PropertiesAnalyzer);
        this.addChild(GameConfig.gameScene());
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?1", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            PopUpManager.removePopUp(this.loadingView1);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }
        egret.setTimeout(function () {
            JSSDK.getSignPackage(this.setPage, this);
        }, this, 1500);
    };
    p.setPage = function () {
        this.removeChild(this.loadingView1);
        this.createGameScene();
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    p.createGameScene = function () {
        this.scnen0 = new Scene0;
        this.addChild(this.scnen0);
        StageUtil.setHorizontalCenter(this.scnen0);
        StageUtil.setVerticalCenter(this.scnen0);
        Global.addEventListener(DataEvent.GOTOS1, this.gotoScene1, this);
        Global.addEventListener(DataEvent.SHOWTIME, this.showTime, this);
        Global.addEventListener(DataEvent.HIDETIME, this.hideTime, this);
        Global.addEventListener(DataEvent.RETRYTIME, this.retryTime, this);
    };
    p.gotoScene1 = function () {
        this.removeChild(this.scnen0);
        this.removeEventListener(DataEvent.GOTOS1, this.gotoScene1, this);
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);
        this.timeclock = new TimeClock;
        this.addChild(this.timeclock);
        this.timeclock.x = 30;
        this.timeclock.y = 20;
    };
    p.showTime = function () {
        this.timeclock.returTime();
        this.scnen1.showTimer2.text = this.timeclock.timeResult;
        this.timeclock.alpha = 0;
    };
    p.hideTime = function () {
        this.timeclock.alpha = 0;
    };
    p.retryTime = function () {
        this.timeclock.alpha = 1;
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map