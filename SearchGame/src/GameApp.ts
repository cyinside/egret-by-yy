
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI;
    private scene1:Scene1;
    private startScene:StartScene;
    private maskScene:MaskScene;
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
            SceneUtil.init(this);
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            this.createGameScene();
        }
        JSSDK.getSignPackage();
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
                this.scene1 = <Scene1>SceneUtil.addScene(this.scene1,Scene1);
                SceneUtil.removeOtherSceneByTarget(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                break;
            case 99:
                this.maskScene = <MaskScene>SceneUtil.addScene(this.maskScene,MaskScene);
                SceneUtil.removeOtherSceneByTarget(this.maskScene);
                StageUtil.setHorizontalCenter(this.maskScene);
                break;
        }
    }
}


