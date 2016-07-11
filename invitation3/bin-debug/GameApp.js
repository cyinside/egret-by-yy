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
        this.loadingView = new LoadingView();
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);
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
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }
        egret.setTimeout(function () { JSSDK.getSignPackage(); }, this, 1000);
        //var hr:string = location.href.split("#")[0];
        ////var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/14/index.php?ct=%E4%BC%B0%E8%AE%A1%E4%BD%A0%E5%AE%9A%E4%B9%89&url=http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0&end&from=singlemessage&isappinstalled=0";
        ////var hr:string = hr1.split("#")[0];
        //if (hr.indexOf("?ct=") != -1) {
        //    ConfigModel.getInstance().contTxt = decodeURI(hr.substring(hr.indexOf("?ct=") + 4, hr.indexOf("&url=")));
        //}
        //if (hr.indexOf("&url=") != -1) {
        //    ConfigModel.getInstance().headUrl = decodeURI(hr.substring(hr.indexOf("&url=") + 5, hr.indexOf("&end")));
        //    this.createShowScene();
        //    ConfigModel.getInstance().isShowPage = true;
        //}else{
        //    this.createGameScene();
        //}
        //console.log(ConfigModel.getInstance().contTxt);
        this.createGameScene();
        this.removeChild(this.loadingView);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    p.createGameScene = function () {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        this.scnen1.x = this.stage.stageWidth / 2;
        this.scnen1.y = this.stage.stageHeight / 2;
        this.scnen1.anchorOffsetX = this.scnen1.width / 2;
        this.scnen1.anchorOffsetY = this.scnen1.height / 2;
        Global.addEventListener(DataEvent.GOTOSCENE2, this.tw, this);
        this.selectScene = new SelectScene;
        StageUtil.setHorizontalCenter(this.selectScene);
        StageUtil.setVerticalCenter(this.selectScene);
        //this.addChild(this.selectScene)
        this.scnen2 = new Scene2;
        StageUtil.setHorizontalCenter(this.scnen2);
        StageUtil.setVerticalCenter(this.scnen2);
        //this.addChild(this.scnen2)
    };
    p.createShowScene = function () {
        this.showScene = new ShowScene;
        StageUtil.setHorizontalCenter(this.showScene);
        StageUtil.setVerticalCenter(this.showScene);
        this.addChild(this.showScene);
        Global.addEventListener(DataEvent.GOTOSCENE1, this.changePage, this);
    };
    p.tw = function () {
        egret.Tween.get(this.scnen1).to({ scaleX: 0, scaleY: 0 }, 800, egret.Ease.backIn).call(this.changePage, this);
        ConfigModel.getInstance().headUrl = __global.headimgurl.toString();
        this.scnen2.uheadIMG.updateImg();
    };
    p.changePage = function () {
        if (this.contains(this.scnen1) == true) {
            this.addChild(this.selectScene);
            this.removeChild(this.scnen1);
        }
        else if (this.contains(this.selectScene) == true) {
            this.addChild(this.scnen2);
            this.scnen2.setText1();
            this.removeChild(this.selectScene);
        }
        else if (this.contains(this.showScene) == true) {
            this.createGameScene();
            this.removeChild(this.showScene);
        }
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
//# sourceMappingURL=GameApp.js.map