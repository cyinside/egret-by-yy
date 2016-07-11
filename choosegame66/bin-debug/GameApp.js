var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameApp;p=c.prototype;
    p.onAddToStage = function (event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE, RES.PropertiesAnalyzer);
        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingUI1();
        this.addChild(this.loadingView);
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);
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
            QuestionModel.getInstance().initConfig();
            JSSDK.getSignPackage();
            //PopUpManager.removePopUp(this.loadingView);
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
    //private video: VideoExample;
    p.createGameScene = function () {
        QuestionModel.getInstance().userInfo.score = 0;
        var dataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        dataEvent.sceneID = 1;
        this.gotoScene(dataEvent);
    };
    p.gotoScene = function (e) {
        switch (e.sceneID) {
            case 1:
                if (this.contains(this.scene3)) {
                    this.scene3.removeEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                    //this.scene3.remove();
                    this.removeChild(this.scene3);
                }
                this.scene1 = new Scene1();
                this.addChild(this.scene1);
                QuestionModel.getInstance().userInfo.id = 0;
                QuestionModel.getInstance().userInfo.score = 0;
                StageUtil.setHorizontalCenter(this.scene1);
                StageUtil.setVerticalCenter(this.scene1);
                this.scene1.addEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                break;
            case 2:
                if (this.contains(this.scene1)) {
                    this.scene1.removeEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                    this.scene1.remove();
                    this.removeChild(this.scene1);
                }
                this.scene2 = new Scene2();
                this.addChild(this.scene2);
                StageUtil.setHorizontalCenter(this.scene2);
                StageUtil.setVerticalCenter(this.scene2);
                this.scene2.next();
                this.scene2.addEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                break;
            case 3:
                if (this.contains(this.scene2)) {
                    this.scene2.removeEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                    this.scene2.remove();
                    this.removeChild(this.scene2);
                }
                this.scene3 = new Scene3();
                this.addChild(this.scene3);
                StageUtil.setHorizontalCenter(this.scene3);
                StageUtil.setVerticalCenter(this.scene3);
                this.scene3.addEventListener(DataEvent.GOTO_SCENE, this.gotoScene, this);
                break;
        }
    };
    return GameApp;
})(egret.DisplayObjectContainer);
egret.registerClass(GameApp,"GameApp");
//# sourceMappingURL=GameApp.js.map