
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingScene;
    private scnen1:Scene1;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingScene();
        this.addChild(this.loadingView);
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);


        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            Global.addEventListener(DataEvent.DATACOMPLETE, this.createGameScene,this);
            DataModel.getInstance().onTouchHandle();

            var hr:string = location.href.split("#")[0];
            //var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/app/LikeApp/1/index.php?uID=od1m6uAqWITdj-REOeIbfqsLJK8E&end&from=singlemessage&isappinstalled=0";
            //var hr:string = hr1.split("#")[0];
            if (hr.indexOf("?uID=") != -1) {
                DataModel.fuUid = decodeURI(hr.substring(hr.indexOf("?uID=") + 5, hr.indexOf("&end")));
                console.log(DataModel.fuUid);
            }
        }

    }
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private createGameScene():void {
        ConfigModel.getInstance().updataShare();

        //this.craetScene1();
        egret.setTimeout(function(){
            JSSDK.getSignPackage(this.craetScene1,this);
        },this,1000);
    }

    private craetScene1(){
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        this.removeChild(this.loadingView);
    }
}


