
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI;
    private chapterScene:ChapterScene;
    private startScene:StartScene;
    private getPrizeScene:GetPrizeScene;
    private awardScene:AwardScene;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

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
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            SceneUtil.init(this);
            this.removeChild(this.loadingView);
        }
        egret.setTimeout(function(){
            JSSDK.getSignPackage(this.createGameScene,this)
        },this,800);
        this.createGameScene();
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private createGameScene():void {
        Global.addEventListener(SceneEvent.CHANGE_SCENE,this.changScene,this);
        this.gotoScene(1);
    }

    private changScene(e){
        var num:number = e.param.sceneID;
        this.gotoScene(num);
    }

    private gotoScene(sceneID:number):void {
        switch (sceneID) {
            case 1:
                this.startScene = <StartScene>SceneUtil.addScene(this.startScene,StartScene);
                SceneUtil.removeOtherSceneByTarget(this.startScene);
                StageUtil.setHorizontalCenter(this.startScene);
                break;
            case 2:
                this.chapterScene = <ChapterScene>SceneUtil.addScene(this.chapterScene,ChapterScene);
                SceneUtil.removeOtherSceneByTarget(this.chapterScene);
                StageUtil.setHorizontalCenter(this.chapterScene);
                this.chapterScene.retryGame();
                break;
            case 3:
                this.getPrizeScene = <GetPrizeScene>SceneUtil.addScene(this.getPrizeScene,GetPrizeScene);
                SceneUtil.removeOtherSceneByTarget(this.getPrizeScene);
                StageUtil.setHorizontalCenter(this.getPrizeScene);
                break;
            case 4:
                this.awardScene = <AwardScene>SceneUtil.addScene(this.awardScene,AwardScene);
                this.awardScene.setFull();
                SceneUtil.removeOtherSceneByTarget(this.awardScene);
                //StageUtil.setHorizontalCenter(this.awardScene);
                break;
        }
    }
}


