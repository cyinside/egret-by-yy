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
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?1", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("load");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "load") {
            RES.loadGroup("preload");
            this.loadingView = new LoadingView();
            this.addChild(this.loadingView);
            StageUtil.setHorizontalCenter(this.loadingView);
            StageUtil.setVerticalCenter(this.loadingView);
        }
        if (event.groupName == "preload") {
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            ConfigModel.getInstance().initConfig();
            egret.setTimeout(function () { JSSDK.getSignPackage(this.getWeiXin, this); }, this, 1000);
        }
    };
    p.getWeiXin = function () {
        this.removeChild(this.loadingView);
        this.createGameScene();
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        this.scene3 = new Scene3;
        this.scene2 = new Scene2;
        //this.addChild(this.scene2);
        StageUtil.setHorizontalCenter(this.scene2);
        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
        Global.addEventListener(DataEvent.CHANGE_SCENE, this.changeScene, this);
    };
    p.changeScene = function (e) {
        this.gotoScene(e.param.sceneID);
    };
    p.gotoScene = function (sceneID) {
        switch (sceneID) {
            case 1:
                if (!this.scene1)
                    this.scene1 = new Scene1;
                this.addChild(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                break;
            case 2:
                if (this.contains(this.scene1)) {
                    this.removeChild(this.scene1);
                }
                this.addChild(this.scene2);
                StageUtil.setHorizontalCenter(this.scene2);
                break;
            case 3:
                if (this.contains(this.scene2)) {
                    this.removeChild(this.scene2);
                }
                this.addChild(this.scene3);
                StageUtil.setHorizontalCenter(this.scene3);
                break;
        }
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
