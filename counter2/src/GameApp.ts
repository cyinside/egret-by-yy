
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingView;
    private scene1:Scene1;
    private scene2:Scene2;
    private scene3:Scene3;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("load");
    }
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if(event.groupName == "load"){
            RES.loadGroup("preload");
            this.loadingView = new LoadingView();
            this.addChild(this.loadingView);
            StageUtil.setHorizontalCenter(this.loadingView);
            StageUtil.setVerticalCenter(this.loadingView);
        }
        if (event.groupName == "preload") {
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            ConfigModel.getInstance().initConfig();
            egret.setTimeout(function(){JSSDK.getSignPackage(this.getWeiXin,this);},this,1000);
            //this.getWeiXin();
        }
    }

    private getWeiXin(){
        this.removeChild(this.loadingView);
        this.createGameScene();
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private createGameScene():void {
        this.scene3 = new Scene3;

        this.scene2 = new Scene2;
        //this.addChild(this.scene2);
        StageUtil.setHorizontalCenter(this.scene2);

        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);

        Global.addEventListener(DataEvent.CHANGE_SCENE,this.changeScene,this);
    }

    private changeScene(e):void{
        this.gotoScene(e.param.sceneID);
    }

    private gotoScene(sceneID:number):void {
        switch (sceneID) {
            case 1:
                if(!this.scene1)
                    this.scene1 = new Scene1;
                this.addChild(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                break;
            case 2:
                if(this.contains(this.scene1)){
                    this.removeChild(this.scene1);
                }
                this.addChild(this.scene2);
                StageUtil.setHorizontalCenter(this.scene2);
                break;
            case 3:
                if(this.contains(this.scene2)){
                    this.removeChild(this.scene2);
                }
                this.addChild(this.scene3);
                StageUtil.setHorizontalCenter(this.scene3);
                break;
        }
    }

}


