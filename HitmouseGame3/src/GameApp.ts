
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingView;
    private chapterScene:ChapterScene;
    private startScene:StartScene;
    private prizeScene:PrizeScene;
    private awordPage:AwordPage1;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());
        //this.loadingView = new LoadingUI();
        //this.addChild(this.loadingView);

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
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
        }
        if (event.groupName == "preload") {
            SceneUtil.init(this);
            ConfigModel.getInstance().initConfig();
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            this.createGameScene();
            egret.setTimeout(function(){
                JSSDK.getSignPackage(this.createGameScene,this);
            },this,1000);
        }
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            //this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }

    }

    private createGameScene():void {
        Global.addEventListener(SceneEvent.CHANGE_SCENE,this.changScene,this);
        this.gotoScene(2);
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
                this.chapterScene.init();
                SceneUtil.removeOtherSceneByTarget(this.chapterScene);
                StageUtil.setHorizontalCenter(this.chapterScene);
                break;
            case 3:
                this.prizeScene = <PrizeScene>SceneUtil.addScene(this.prizeScene,PrizeScene);
                SceneUtil.removeOtherSceneByTarget(this.prizeScene);
                StageUtil.setHorizontalCenter(this.prizeScene);
                break;
            case 4:
                this.loadingView = <LoadingView>SceneUtil.addScene(this.loadingView,LoadingView);
                SceneUtil.removeOtherSceneByTarget(this.loadingView);
                StageUtil.setHorizontalCenter(this.loadingView);
                break;
            case 5:
                this.awordPage = <AwordPage1>SceneUtil.addScene(this.awordPage,AwordPage1);
                SceneUtil.removeOtherSceneByTarget(this.awordPage);
                StageUtil.setHorizontalCenter(this.awordPage);
                break;
         }
    }
}


