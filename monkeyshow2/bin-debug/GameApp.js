var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameApp,p=c.prototype;
    p.onAddToStage = function (event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE, RES.PropertiesAnalyzer);
        this.addChild(GameConfig.gameScene());
        this.loadingview = new LoadingView;
        this.addChild(this.loadingview);
        StageUtil.setHorizontalCenter(this.loadingview);
        StageUtil.setVerticalCenter(this.loadingview);
        this.loadingview.addEventListener(DataEvent.comple, this.compleHandle, this);
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
            //PopUpManager.removePopUp(this.loadingView);
            ConfigModel.getInstance().initConfig();
            //JSSDK.getSignPackage(this.jssdeOK,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.loadingview.loadingComple = true;
        }
    };
    p.jssdeOK = function () {
        this.loadingview.loadingComple = true;
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingview.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.compleHandle = function () {
        this.createGameScene();
        this.removeChild(this.loadingview);
    };
    p.createGameScene = function () {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);
        this.scnen1.addEventListener(DataEvent.GotoScene2FromS2, this.gotoScene2, this);
    };
    p.gotoScene2 = function () {
        console.log(111);
        this.scnen2 = new Scene2;
        this.addChild(this.scnen2);
        StageUtil.setHorizontalCenter(this.scnen2);
        StageUtil.setVerticalCenter(this.scnen2);
        this.scnen2.addEventListener(DataEvent.backtoScene2, this.removeS2, this);
    };
    p.removeS2 = function () {
        this.removeChild(this.scnen2);
    };
    return GameApp;
})(egret.DisplayObjectContainer);
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map