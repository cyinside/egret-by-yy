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
            SceneUtil.init(this);
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            this.createGameScene();
        }
        JSSDK.getSignPackage();
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        Global.addEventListener(SceneEvent.CHANGE_SCENE, this.changScene, this);
        this.gotoScene(1);
    };
    p.changScene = function (e) {
        var num = e.param.sceneID;
        this.gotoScene(num);
    };
    p.gotoScene = function (sceneID) {
        switch (sceneID) {
            case 1:
                this.startScene = SceneUtil.addScene(this.startScene, StartScene);
                SceneUtil.removeOtherSceneByTarget(this.startScene);
                StageUtil.setHorizontalCenter(this.startScene);
                break;
            case 2:
                this.scene1 = SceneUtil.addScene(this.scene1, Scene1);
                SceneUtil.removeOtherSceneByTarget(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                break;
            case 99:
                this.maskScene = SceneUtil.addScene(this.maskScene, MaskScene);
                SceneUtil.removeOtherSceneByTarget(this.maskScene);
                StageUtil.setHorizontalCenter(this.maskScene);
                break;
        }
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map