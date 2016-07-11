
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI1;

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
        this.loadingView = new LoadingUI1();
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
            QuestionModel.getInstance().initConfig();
            JSSDK.getSignPackage();
            //PopUpManager.removePopUp(this.loadingView);
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
    private createGameScene():void {
        QuestionModel.getInstance().userInfo.score = 0;
        var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        dataEvent.sceneID = 1;
        this.gotoScene(dataEvent);
    }

    private gotoScene(e:DataEvent):void{
        switch(e.sceneID){
            case 1:
                if(this.contains(this.scene3)){
                    this.scene3.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    //this.scene3.remove();
                    this.removeChild(this.scene3);
                }
                this.scene1 = new Scene1();
                this.addChild(this.scene1);
                QuestionModel.getInstance().userInfo.id = 0;
                QuestionModel.getInstance().userInfo.score = 0;

                StageUtil.setHorizontalCenter(this.scene1);
                StageUtil.setVerticalCenter(this.scene1);
                this.scene1.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                break;
            case 2:
                if(this.contains(this.scene1)){
                    this.scene1.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.scene1.remove();
                    this.removeChild(this.scene1);
                }
                this.scene2 = new Scene2();
                this.addChild(this.scene2);

                StageUtil.setHorizontalCenter(this.scene2);
                StageUtil.setVerticalCenter(this.scene2);

                this.scene2.next();
                this.scene2.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                break;
            case 3:
                if(this.contains(this.scene2)){
                    this.scene2.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.scene2.remove();
                    this.removeChild(this.scene2);
                }
                this.scene3 = new Scene3();
                this.addChild(this.scene3);

                StageUtil.setHorizontalCenter(this.scene3);
                StageUtil.setVerticalCenter(this.scene3);
                this.scene3.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                break;
        }
    }

}


