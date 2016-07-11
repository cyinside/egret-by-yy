var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameApp,p=c.prototype;
    p.onAddToStage = function (event) {
        //egret.Injector.mapClass(RES.AnalyzerBase, RES.PropertiesAnalyzer, RES.PropertiesAnalyzer.TYPE);
        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json?1", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.loadError, this);
        RES.loadGroup("preload");
    };
    p.loadError = function (c) {
        alert(c.resItem);
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            ConfigModel.getInstance().initConfig();
            egret.setTimeout(function () { JSSDK.getSignPackage(this.wxHandler, this); }, this, 1000);
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
            StageUtil.setHorizontalCenter(this.loadingView);
            StageUtil.setVerticalCenter(this.loadingView);
        }
    };
    p.wxHandler = function () {
        this.stage.removeChild(this.loadingView);
        this.initScene();
    };
    p.initScene = function () {
        Global.addEventListener(DataEvent.GOTO_SCENE, this.changeScene, this);
        this.gotoScene(1);
    };
    p.changeScene = function (e) {
        this.gotoScene(e.param.sceneID);
    };
    /**
     * 创建游戏场景th
     * Create a game scene
     */
    p.gotoScene = function (scene) {
        switch (scene) {
            case 1:
                this.startScene = new StartScene();
                this.addChild(this.startScene);
                StageUtil.setHorizontalCenter(this.startScene);
                //StageUtil.setVerticalCenter(this.startScene);
                //this.startScene.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                break;
            case 2:
                if (this.contains(this.startScene)) {
                    //this.startScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.startScene);
                }
                if (this.contains(this.endScene)) {
                    //this.endScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.endScene);
                }
                if (this.contains(this.endScene1)) {
                    //this.endScene1.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.endScene1);
                }
                ConfigModel.getInstance().reset();
                if (!this.chapterScene) {
                    this.chapterScene = new ChapterScene();
                    StageUtil.setHorizontalCenter(this.chapterScene);
                }
                this.addChild(this.chapterScene);
                this.chapterScene.reset();
                break;
            case 3:
                if (this.contains(this.chapterScene)) {
                    //this.chapterScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.chapterScene);
                }
                if (!this.endScene) {
                    this.endScene = new EndScene();
                    StageUtil.setHorizontalCenter(this.endScene);
                }
                this.addChild(this.endScene);
                break;
            case 4:
                if (this.contains(this.chapterScene)) {
                    //this.chapterScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.chapterScene);
                }
                if (!this.endScene1) {
                    this.endScene1 = new EndScene1();
                    StageUtil.setHorizontalCenter(this.endScene1);
                }
                this.addChild(this.endScene1);
                break;
        }
    };
    p.onDeviceMotionHandler = function () {
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map