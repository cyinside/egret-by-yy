
class GameApp extends egret.DisplayObjectContainer {
    private loadingview:LoadingView;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());

        this.loadingview = new LoadingView;
        this.addChild(this.loadingview);
        StageUtil.setHorizontalCenter(this.loadingview);
        StageUtil.setVerticalCenter(this.loadingview);
        this.loadingview.addEventListener(DataEvent.comple,this.compleHandle,this);

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
            //PopUpManager.removePopUp(this.loadingView);
            ConfigModel.getInstance().initConfig();
            //JSSDK.getSignPackage(this.jssdeOK,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.loadingview.loadingComple = true;
            //this.removeChild(this.loadingview);
            //this.createGameScene();
        }

    }

    private jssdeOK(){
        this.loadingview.loadingComple = true;
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingview.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private compleHandle(){
        this.createGameScene();
        this.removeChild(this.loadingview);
    }

    private scnen1:Scene1;
    private scnen2:Scene2;
    private createGameScene():void {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        StageUtil.setHorizontalCenter(this.scnen1);
        StageUtil.setVerticalCenter(this.scnen1);
        this.scnen1.addEventListener(DataEvent.GotoScene2FromS2,this.gotoScene2,this);
    }

    private gotoScene2(){
        console.log(111);
        this.scnen2 = new Scene2;
        this.addChild(this.scnen2);
        StageUtil.setHorizontalCenter(this.scnen2);
        StageUtil.setVerticalCenter(this.scnen2);
        this.scnen2.addEventListener(DataEvent.backtoScene2,this.removeS2,this);
    }

    private removeS2(){
        this.removeChild(this.scnen2);
    }


}


