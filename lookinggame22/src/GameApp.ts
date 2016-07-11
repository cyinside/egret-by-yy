
class GameApp extends egret.DisplayObjectContainer {
    private loadingView1:LoadingView;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        this.loadingView1 = new LoadingView();
        this.addChild(this.loadingView1);
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?1", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }

    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }


    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            PopUpManager.removePopUp(this.loadingView1);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            //this.removeChild(this.loadingView1);
            //this.createGameScene();
        }
        egret.setTimeout(function(){
            JSSDK.getSignPackage(this.setPage,this);
        },this,1500);
    }

    private setPage(){
        this.removeChild(this.loadingView1);
        this.createGameScene();
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            //this.loadingView1.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private scnen1:Scene1;
    private scnen0:Scene0;
    private timeclock:TimeClock;
    private createGameScene():void {
        this.scnen0 = new Scene0;
        this.addChild(this.scnen0);
        StageUtil.setHorizontalCenter(this.scnen0);
        StageUtil.setVerticalCenter(this.scnen0);

        Global.addEventListener(DataEvent.GOTOS1,this.gotoScene1,this);
        Global.addEventListener(DataEvent.SHOWTIME,this.showTime,this);
        Global.addEventListener(DataEvent.HIDETIME,this.hideTime,this);
        Global.addEventListener(DataEvent.RETRYTIME,this.retryTime,this);
    }

    private gotoScene1(){
        this.removeChild(this.scnen0);
        this.removeEventListener(DataEvent.GOTOS1,this.gotoScene1,this);

        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);

        this.timeclock = new TimeClock;
        this.addChild(this.timeclock);
        this.timeclock.x = 30;
        this.timeclock.y = 20;
    }

    private showTime(){
        this.timeclock.returTime();
        this.scnen1.showTimer2.text = this.timeclock.timeResult;
        this.timeclock.alpha =0;
    }

    private hideTime(){
        this.timeclock.alpha =0;
    }
    private retryTime(){
        this.timeclock.alpha =1;
    }


}


