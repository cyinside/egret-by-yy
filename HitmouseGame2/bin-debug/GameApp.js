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
        //this.loadingView = new LoadingUI();
        //this.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
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
        }
        if (event.groupName == "preload") {
            SceneUtil.init(this);
            ConfigModel.getInstance().initConfig();
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            //this.createGameScene();
            egret.setTimeout(function () {
                JSSDK.getSignPackage(this.createGameScene, this);
            }, this, 1000);
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
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
                this.chapterScene = SceneUtil.addScene(this.chapterScene, ChapterScene);
                this.chapterScene.init();
                SceneUtil.removeOtherSceneByTarget(this.chapterScene);
                StageUtil.setHorizontalCenter(this.chapterScene);
                break;
            case 3:
                this.prizeScene = SceneUtil.addScene(this.prizeScene, PrizeScene);
                SceneUtil.removeOtherSceneByTarget(this.prizeScene);
                StageUtil.setHorizontalCenter(this.prizeScene);
                break;
            case 4:
                this.loadingView = SceneUtil.addScene(this.loadingView, LoadingView);
                SceneUtil.removeOtherSceneByTarget(this.loadingView);
                StageUtil.setHorizontalCenter(this.loadingView);
                break;
            case 5:
                this.awordPage = SceneUtil.addScene(this.awordPage, AwordPage1);
                SceneUtil.removeOtherSceneByTarget(this.awordPage);
                StageUtil.setHorizontalCenter(this.awordPage);
                break;
        }
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
