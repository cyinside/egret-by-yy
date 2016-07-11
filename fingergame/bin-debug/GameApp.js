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
        this.loadingview1 = new Loadingview;
        this.addChild(this.loadingview1);
        StageUtil.setHorizontalCenter(this.loadingview1);
        StageUtil.setVerticalCenter(this.loadingview1);
        //this.loadingview1.addEventListener(DataEvent.comple,this.compleHandle,this);
        //this.loadingView = new LoadingUI;
        //this.addChild(this.loadingView);
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
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            //this.loadingview1.loadingComple = true;
            this.removeChild(this.loadingview1);
            this.createGameScene();
        }
        JSSDK.getSignPackage();
    };
    p.onResourceProgress = function (event) {
        //if (event.groupName == "preload") {
        //    this.loadingview1.setProgress(event.itemsLoaded, event.itemsTotal);
        //}
    };
    //private video: VideoExample;
    p.createGameScene = function () {
        this.scene2 = new Scene2;
        StageUtil.setHorizontalCenter(this.scene2);
        StageUtil.setVerticalCenter(this.scene2);
        Global.addEventListener(DataEvent.GOTO_SCENE3, this.creatScene3, this);
        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
        StageUtil.setVerticalCenter(this.scene1);
        this.scene1.addEventListener(DataEvent.GOTO_SCENE2, this.gotoScene2, this);
        this.scenea = new Scenea;
        this.addChild(this.scenea);
        StageUtil.setHorizontalCenter(this.scenea);
        StageUtil.setVerticalCenter(this.scenea);
        this.scenea.addEventListener(DataEvent.GOTO_SCENE1, this.gotoScene1, this);
    };
    p.createGameScene11 = function () {
        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
        StageUtil.setVerticalCenter(this.scene1);
        this.scene1.begininfo.touchEnabled = true;
        this.scene1.addEventListener(DataEvent.GOTO_SCENE2, this.gotoScene2, this);
    };
    p.creatScene3 = function (evt) {
        this.scene3 = new Scene3;
        this.addChild(this.scene3);
        this.scene3.createScene(evt.param);
        StageUtil.setHorizontalCenter(this.scene3);
        StageUtil.setVerticalCenter(this.scene3);
        this.scene3.addEventListener(DataEvent.GOTO_SCENE1, this.gotoScene11, this);
        this.removeChild(this.scene2);
    };
    p.gotoScene1 = function (evt) {
        this.removeChild(this.scenea);
        this.scene1.begininfo.touchEnabled = true;
    };
    p.gotoScene11 = function (evt) {
        this.createGameScene11();
        this.removeChild(this.scene3);
    };
    p.gotoScene2 = function () {
        this.addChild(this.scene2);
        this.removeChild(this.scene1);
    };
    p.musicControl = function () {
        if (Musicicon.IsOn == true) {
            this.musicBut.stopMusic();
        }
        else if (Musicicon.IsOn == false) {
            this.musicBut.musicOn();
        }
    };
    return GameApp;
})(egret.DisplayObjectContainer);
egret.registerClass(GameApp,"GameApp");
//# sourceMappingURL=GameApp.js.map