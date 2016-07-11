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
        //this.loadingView = new LoadingScene();
        //this.addChild(this.loadingView);
        //StageUtil.setHorizontalCenter(this.loadingView);
        //StageUtil.setVerticalCenter(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
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
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            Global.addEventListener(DataEvent.DATACOMPLETE, this.createGameScene, this);
            DataModel.getInstance().onTouchHandle();
            //this.createGameScene();
            var hr = location.href.split("#")[0];
            //var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/app/LikeApp2/1/index.php?uID=od1m6uAqWITdj-REOeIbfqsLJK8E&uimg=http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0&end";
            //var hr:string = hr1.split("#")[0];
            if (hr.indexOf("?uID=") != -1) {
                DataModel.fuUid = decodeURI(hr.substring(hr.indexOf("?uID=") + 5, hr.indexOf("&uimg")));
                ConfigModel.headImg = decodeURI(hr.substring(hr.indexOf("&uimg=") + 6, hr.indexOf("&end")));
                console.log(DataModel.fuUid, ConfigModel.headImg);
            }
            else {
                ConfigModel.headImg = __global.headimgurl;
            }
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        //ConfigModel.getInstance().updataShare();
        //this.craetScene1();
        egret.setTimeout(function () {
            JSSDK.getSignPackage(this.craetScene1, this);
        }, this, 800);
        Global.addEventListener(DataEvent.GOTO_SCENE, this.gotoLikePage, this);
    };
    p.craetScene1 = function () {
        this.likeScene = new LikeScene;
        this.addChild(this.likeScene);
        StageUtil.setHorizontalCenter(this.likeScene);
        this.likeScene.touchEnabled = false;
        this.removeChild(this.loadingView);
        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
    };
    p.gotoLikePage = function () {
        egret.Tween.get(this.scene1).to({ alpha: 0 }, 800).call(function () {
            this.removeChild(this.scene1);
            this.likeScene.touchEnabled = true;
            this.likeScene.beginTW();
        }, this);
    };
    return GameApp;
}(egret.DisplayObjectContainer));
egret.registerClass(GameApp,'GameApp');
