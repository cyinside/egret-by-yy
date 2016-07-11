//http://www.joyoungfeld-ad.com/zhaoyang/animation/FathersDay/index.php
class GameApp extends egret.DisplayObjectContainer {
    private scene1:Scene1;
    private scene2:Scene2;
    private scene3:Scene3;
    private scene4:Scene4;
    private scene5:Scene5;
    private scene6:Scene6;
    private scene7:Scene7;
    private scene8:Scene8;
    private scene9:Scene9;
    private scene11:Scene11;
    private choosePage:ChoosePage;
    private loadingView:LoadingUI;
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
        RES.loadConfig("resource/default.res.json?2", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            SceneUtil.init(this);
            ConfigModel.getInstance().initConfig();
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.removeChild(this.loadingView);
            //this.createGameScene();
        }
        egret.setTimeout(function(){
            JSSDK.getSignPackage(this.createGameScene,this);
        },this,1000);
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
                this.scene1 = <Scene1>SceneUtil.addScene(this.scene1,Scene1);
                SceneUtil.removeOtherSceneByTarget(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                this.scene1.twInt();
                break;
            case 2:
                this.scene2 = <Scene2>SceneUtil.addScene(this.scene2,Scene2);
                SceneUtil.removeOtherSceneByTarget(this.scene2);
                StageUtil.setHorizontalCenter(this.scene2);
                this.scene2.twInt();
                break;
            case 3:
                this.scene3 = <Scene3>SceneUtil.addScene(this.scene3,Scene3);
                SceneUtil.removeOtherSceneByTarget(this.scene3);
                StageUtil.setHorizontalCenter(this.scene3);
                this.scene3.twInt();
                break;
            case 4:
                this.scene4 = <Scene4>SceneUtil.addScene(this.scene4,Scene4);
                SceneUtil.removeOtherSceneByTarget(this.scene4);
                StageUtil.setHorizontalCenter(this.scene4);
                this.scene4.twInt();
                break;
            case 5:
                this.scene5 = <Scene5>SceneUtil.addScene(this.scene5,Scene5);
                SceneUtil.removeOtherSceneByTarget(this.scene5);
                StageUtil.setHorizontalCenter(this.scene5);
                this.scene5.twInt();
                break;
            case 6:
                this.scene6 = <Scene6>SceneUtil.addScene(this.scene6,Scene6);
                SceneUtil.removeOtherSceneByTarget(this.scene6);
                StageUtil.setHorizontalCenter(this.scene6);
                this.scene6.twInt();
                break;
            case 7:
                this.scene7 = <Scene7>SceneUtil.addScene(this.scene7,Scene7);
                SceneUtil.removeOtherSceneByTarget(this.scene7);
                StageUtil.setHorizontalCenter(this.scene7);
                this.scene7.twInt();
                break;
            case 8:
                this.scene8 = <Scene8>SceneUtil.addScene(this.scene8,Scene8);
                SceneUtil.removeOtherSceneByTarget(this.scene8);
                StageUtil.setHorizontalCenter(this.scene8);
                this.scene8.twInt();
                break;
            case 9:
                this.scene9 = <Scene9>SceneUtil.addScene(this.scene9,Scene9);
                SceneUtil.removeOtherSceneByTarget(this.scene9);
                StageUtil.setHorizontalCenter(this.scene9);
                this.scene9.twInt();
                break;
            case 10:
                this.choosePage = <ChoosePage>SceneUtil.addScene(this.choosePage,ChoosePage);
                SceneUtil.removeOtherSceneByTarget(this.choosePage);
                StageUtil.setHorizontalCenter(this.choosePage);
                this.choosePage.twInt();
                break;
            case 11:
                this.scene11 = <Scene11>SceneUtil.addScene(this.scene11,Scene11);
                SceneUtil.removeOtherSceneByTarget(this.scene11);
                StageUtil.setHorizontalCenter(this.scene11);
                this.scene11.twInt();
                break;
        }
    }
}


