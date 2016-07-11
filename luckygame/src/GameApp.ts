
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        //JSSDK.getSignPackage(this.onLoadComplete,this);
        this.onLoadComplete();

    }

    private onLoadComplete(){
        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingUI();
        this.addChild(this.loadingView);

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
            //JSSDK.getSignPackage();
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            this.createGameScene();
        }
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    //private video: VideoExample;
    private scnen1:Scene1;
    private createGameScene():void {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);

        egret.setTimeout(this.getWeixin,this,2000);
    }

    private getWeixin(){
        var dateT:string = this.scnen1.curentTime1().toString();
        var stitle:ResultInfo = ConfigModel.getInstance().getResultInfoById(parseInt(this.scnen1.luckyNum));

        JSSDK.getWeiXinShareAppMessage(2,dateT+","+stitle.text
            ,ConfigModel.getInstance().wx_share_link,ConfigModel.getInstance().wx_share_img,ConfigModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(2,dateT+","+stitle.text
            ,ConfigModel.getInstance().wx_share_link,ConfigModel.getInstance().wx_share_img);
    }


}


