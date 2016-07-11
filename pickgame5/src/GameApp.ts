
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingUI;

    private startScene:StartScene;
    private chapterScene:ChapterScene;
    private endScene:EndScene;
    private endScene1:EndScene1;

    private sound:egret.Sound;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        //egret.Injector.mapClass(RES.AnalyzerBase, RES.PropertiesAnalyzer, RES.PropertiesAnalyzer.TYPE);
        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json?1", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.loadError,this);
        RES.loadGroup("preload");
    }

    private loadError(c: RES.ResourceEvent){
        alert(c.resItem)
    }

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            ConfigModel.getInstance().initConfig();
            egret.setTimeout(function(){JSSDK.getSignPackage(this.wxHandler,this);},this,1000);
            //this.wxHandler();
        }

    }
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
            StageUtil.setHorizontalCenter(this.loadingView);
            StageUtil.setVerticalCenter(this.loadingView);
        }
    }

    public wxHandler():void{
        this.stage.removeChild(this.loadingView);
        this.initScene();
    }

    private initScene():void{
        Global.addEventListener(DataEvent.GOTO_SCENE,this.changeScene,this);
        this.gotoScene(1);
    }

    private changeScene(e):void{
        this.gotoScene(e.param.sceneID);
    }

    /**
     * 创建游戏场景th
     * Create a game scene
     */

    private gotoScene(scene:number):void {
        switch (scene){
            case 1:
                this.startScene = new StartScene();
                this.addChild(this.startScene);
                StageUtil.setHorizontalCenter(this.startScene);
                //StageUtil.setVerticalCenter(this.startScene);
                //this.startScene.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                break;
            case 2:
                if(this.contains(this.startScene)){
                    //this.startScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.startScene);
                }
                if(this.contains(this.endScene)){
                    //this.endScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.endScene);
                }
                if(this.contains(this.endScene1)){
                    //this.endScene1.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.endScene1);
                }
                ConfigModel.getInstance().reset();
                if(!this.chapterScene){
                    this.chapterScene = new ChapterScene();
                    StageUtil.setHorizontalCenter(this.chapterScene);
                    //this.chapterScene.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                }
                this.addChild(this.chapterScene);
                this.chapterScene.reset();
                break;
            case 3:
                if(this.contains(this.chapterScene)){
                    //this.chapterScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.chapterScene);
                }
                if(!this.endScene){
                    this.endScene = new EndScene();
                    StageUtil.setHorizontalCenter(this.endScene);
                    //this.endScene.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                }
                this.addChild(this.endScene);
                break;
            case 4:
                if(this.contains(this.chapterScene)){
                    //this.chapterScene.removeEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                    this.removeChild(this.chapterScene);
                }

                if(!this.endScene1){
                    this.endScene1 = new EndScene1();
                    StageUtil.setHorizontalCenter(this.endScene1);
                    //StageUtil.setVerticalCenter(this.endScene);
                    //this.endScene1.addEventListener(DataEvent.GOTO_SCENE,this.gotoScene,this);
                }
                this.addChild(this.endScene1);
                break;
        }
    }


    private onDeviceMotionHandler():void{

    }

     //private SHAKE_THRESHOLD = 3000;
     //private last_update = 0;
     //private temp_x = 0;
     //private temp_y = 0;
     //private temp_z = 0;
     //private last_x = 0;
     //private last_y = 0;
     //private last_z = 0;
     //public deviceMotionHandler(eventData):void{
     //    var acceleration = eventData.accelerationIncludingGravity;
     //    var curTime = new Date().getTime();
     //    if ((curTime - this.last_update) > 100) {
     //        var diffTime = curTime - this.last_update;
     //        this.last_update = curTime;
     //        this.temp_x = acceleration.x;
     //        this.temp_y = acceleration.y;
     //        this.temp_z = acceleration.z;
     //        var speed = Math.abs(this.temp_x + this.temp_y + this.temp_z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;
     //        if (speed > this.SHAKE_THRESHOLD) {
     //             //alert("摇动了");
     //            lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(MainNotify.onDeviceMotion,eventData,false));
     //        }
     //        this.last_x = this.temp_x;
     //        this.last_y = this.temp_y;
     //        this.last_z = this.temp_z;
     //    }
     //}

}


