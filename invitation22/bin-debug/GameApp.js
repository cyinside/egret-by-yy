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
        //this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingView();
        this.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }
        JSSDK.getSignPackage();
        var hr = location.href.split("#")[0];
        //var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/index.php?tnum=4&uname=%E5%B0%8A%E6%95%AC%E7%9A%84%E5%B9%BF%E5%91%8A%E4%BA%BA%E5%98%BB%E5%98%BB%E5%93%88%E5%93%88%E5%93%88&num=1&url=http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0&end&from=singlemessage&isappinstalled=0"
        //var hr:string = hr1.split("#")[0];
        if (hr.indexOf("?tnum=") != -1) {
            ConfigModel.getInstance().isShowPage = true;
            ConfigModel.getInstance().typeNum = parseInt(hr.substring(hr.indexOf("?tnum=") + 6, hr.indexOf("&uname")));
        }
        if (hr.indexOf("&uname=") != -1) {
            ConfigModel.getInstance().uNameTxt = decodeURI(hr.substring(hr.indexOf("&uname=") + 7, hr.indexOf("&num")));
        }
        if (hr.indexOf("&num=") != -1) {
            ConfigModel.getInstance().idNum = parseInt(hr.substring(hr.indexOf("&num=") + 5, hr.indexOf("&url=")));
        }
        if (hr.indexOf("&url=") != -1) {
            ConfigModel.getInstance().headUrl = decodeURI(hr.substring(hr.indexOf("&url=") + 5, hr.indexOf("&end")));
            this.createShowScene();
        }
        else {
            this.createGameScene();
        }
        this.removeChild(this.loadingView);
    };
    p.onResourceLoadError = function (event) {
        //TODO
        alert("Group:" + event.groupName + "pic" + event.itemsTotal + " has failed to load");
        //.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    p.createShowScene = function () {
        ConfigModel.getInstance().updateShare1();
        this.showScene = new ShowScene;
        this.addChild(this.showScene);
        StageUtil.setHorizontalCenter(this.showScene);
        StageUtil.setVerticalCenter(this.showScene);
        //this.scnen2.setPage1(ConfigModel.getInstance().idNum);
        Global.addEventListener(DataEvent.REMOVESHOWSCENE, this.removeShowPage, this);
    };
    //private createGameScene1(){
    //    this.addChild(this.scnen2);
    //}
    p.createGameScene = function () {
        if (ConfigModel.getInstance().isShowPage == false) {
            this.createShowScene();
        }
        this.selectScene = new SelectScene;
        this.addChild(this.selectScene);
        StageUtil.setHorizontalCenter(this.selectScene);
        StageUtil.setVerticalCenter(this.selectScene);
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);
        Global.addEventListener(DataEvent.REMOVESCENE1, this.removeS1Tw, this);
        Global.addEventListener(DataEvent.GOTOSCENE2, this.waitRemove, this);
        //
        //this.loadingView = new LoadingView;
        //this.addChild(this.loadingView);
        //StageUtil.setHorizontalCenter(this.loadingView);
        //StageUtil.setVerticalCenter(this.loadingView);
        this.createGameScene2();
    };
    p.createGameScene2 = function () {
        this.scnen2 = new Scene22;
        StageUtil.setHorizontalCenter(this.scnen2);
        StageUtil.setVerticalCenter(this.scnen2);
        Global.addEventListener(DataEvent.RETRY, this.retry, this);
    };
    p.removeS1Tw = function () {
        egret.Tween.get(this.scnen1).to({ x: -this.scnen1.width }, 700, egret.Ease.backInOut).call(this.removeS1, this);
    };
    p.removeS1 = function () {
        this.removeChild(this.scnen1);
    };
    p.removeShowPage = function () {
        this.createGameScene();
        this.removeChild(this.showScene);
    };
    p.tw = function () {
        this.selectScene.inputPage.removeChild(this.selectScene.inputPage.nameInput);
        egret.Tween.get(this.selectScene.inputPage).to({ scaleX: 0, scaleY: 0 }, 600, egret.Ease.backInOut).call(this.gotoS2, this);
    };
    p.gotoS2 = function () {
        this.scnen2.uheadIMG.updateImg();
        this.addChild(this.scnen2);
        egret.Tween.get(this.scnen2.box).wait(1000).to({ alpha: 1 }, 1200);
        egret.Tween.get(this.scnen2.boxtxt).wait(1000).to({ alpha: 1 }, 1200);
        egret.Tween.get(this.scnen2.retryBut).to({ x: 490 }, 1200, egret.Ease.sineIn);
        this.removeChild(this.selectScene);
        this.scnen2.setPage1(ConfigModel.getInstance().idNum);
    };
    p.waitRemove = function () {
        ConfigModel.getInstance().headUrl = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";
        //ConfigModel.getInstance().headUrl = __global.headimgurl.toString();
        this.scnen2.setpage();
        egret.setTimeout(this.tw, this, 2500);
    };
    p.retry = function () {
        this.addChild(this.selectScene);
        this.selectScene.inputPage.addChild(this.selectScene.inputPage.nameInput);
        this.selectScene.inputPage.retey();
        StageUtil.setHorizontalCenter(this.selectScene);
        StageUtil.setVerticalCenter(this.selectScene);
        this.removeChild(this.scnen2);
        this.selectScene.touchControl(true);
        this.scnen2.retryBut.x = 640;
    };
    return GameApp;
})(egret.DisplayObjectContainer);
egret.registerClass(GameApp,"GameApp");
//# sourceMappingURL=gameapp.js.map