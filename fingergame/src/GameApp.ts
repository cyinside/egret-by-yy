
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI;
    private scenea:Scenea;
    private scene1:Scene1;
    private scene2:Scene2;
    private scene3:Scene3;
    private loadingview1:Loadingview;
    private musicBut:Musicicon;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

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
            //this.loadingview1.loadingComple = true;
            this.removeChild(this.loadingview1);
            this.createGameScene();
        }
        JSSDK.getSignPackage();
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        //if (event.groupName == "preload") {
        //    this.loadingview1.setProgress(event.itemsLoaded, event.itemsTotal);
        //}
    }

    //private video: VideoExample;
    private createGameScene():void {
        this.scene2 = new Scene2;
        StageUtil.setHorizontalCenter(this.scene2);
        StageUtil.setVerticalCenter(this.scene2);
        Global.addEventListener(DataEvent.GOTO_SCENE3,this.creatScene3,this);

        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
        StageUtil.setVerticalCenter(this.scene1);
        this.scene1.addEventListener(DataEvent.GOTO_SCENE2,this.gotoScene2,this);

        this.scenea = new Scenea;
        this.addChild(this.scenea);
        StageUtil.setHorizontalCenter(this.scenea);
        StageUtil.setVerticalCenter(this.scenea);
        this.scenea.addEventListener(DataEvent.GOTO_SCENE1,this.gotoScene1,this);

    }

    private createGameScene11():void {
        this.scene1 = new Scene1;
        this.addChild(this.scene1);
        StageUtil.setHorizontalCenter(this.scene1);
        StageUtil.setVerticalCenter(this.scene1);
        this.scene1.begininfo.touchEnabled = true;
        this.scene1.addEventListener(DataEvent.GOTO_SCENE2,this.gotoScene2,this);
    }


    private creatScene3(evt){
        this.scene3 = new Scene3;
        this.addChild(this.scene3);
        this.scene3.createScene(evt.param);
        StageUtil.setHorizontalCenter(this.scene3);
        StageUtil.setVerticalCenter(this.scene3);
        this.scene3.addEventListener(DataEvent.GOTO_SCENE1,this.gotoScene11,this);

        this.removeChild(this.scene2);

    }

    private gotoScene1(evt:egret.TouchEvent){
        this.removeChild(this.scenea);
        this.scene1.begininfo.touchEnabled = true;
    }

    private gotoScene11(evt:egret.TouchEvent){
            this.createGameScene11();
            this.removeChild(this.scene3);
    }

    private gotoScene2(){
        this.addChild(this.scene2);
        this.removeChild(this.scene1);
    }

    private musicControl(){
        if(Musicicon.IsOn == true){
            this.musicBut.stopMusic();
        }else if(Musicicon.IsOn == false){
            this.musicBut.musicOn();
        }
    }

}


