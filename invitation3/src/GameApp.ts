
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingView;
    private scnen1:Scene1;
    private scnen2:Scene2;
    private showScene:ShowScene;
    private selectScene:SelectScene;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);

        this.addChild(GameConfig.gameScene());
        this.loadingView = new LoadingView();
        StageUtil.setHorizontalCenter(this.loadingView);
        StageUtil.setVerticalCenter(this.loadingView);
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
        }
        egret.setTimeout(function(){JSSDK.getSignPackage();},this,1000);

        //var hr:string = location.href.split("#")[0];
        ////var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/14/index.php?ct=%E4%BC%B0%E8%AE%A1%E4%BD%A0%E5%AE%9A%E4%B9%89&url=http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0&end&from=singlemessage&isappinstalled=0";
        ////var hr:string = hr1.split("#")[0];
        //if (hr.indexOf("?ct=") != -1) {
        //    ConfigModel.getInstance().contTxt = decodeURI(hr.substring(hr.indexOf("?ct=") + 4, hr.indexOf("&url=")));
        //}
        //if (hr.indexOf("&url=") != -1) {
        //    ConfigModel.getInstance().headUrl = decodeURI(hr.substring(hr.indexOf("&url=") + 5, hr.indexOf("&end")));
        //    this.createShowScene();
        //    ConfigModel.getInstance().isShowPage = true;
        //}else{
        //    this.createGameScene();
        //}
        //console.log(ConfigModel.getInstance().contTxt);
        this.createGameScene();
        this.removeChild(this.loadingView);


    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            //this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private createGameScene():void {
        this.scnen1 = new Scene1;
        this.addChild(this.scnen1);
        this.scnen1.x = this.stage.stageWidth/2;
        this.scnen1.y = this.stage.stageHeight/2;
        this.scnen1.anchorOffsetX = this.scnen1.width/2;
        this.scnen1.anchorOffsetY = this.scnen1.height/2;
        Global.addEventListener(DataEvent.GOTOSCENE2,this.tw,this);

        this.selectScene = new SelectScene;
        StageUtil.setHorizontalCenter(this.selectScene);
        StageUtil.setVerticalCenter(this.selectScene);
        //this.addChild(this.selectScene)

        this.scnen2 = new Scene2;
        StageUtil.setHorizontalCenter(this.scnen2);
        StageUtil.setVerticalCenter(this.scnen2);
        //this.addChild(this.scnen2)
    }

    private createShowScene(){
        this.showScene = new ShowScene;
        StageUtil.setHorizontalCenter(this.showScene);
        StageUtil.setVerticalCenter(this.showScene);
        this.addChild(this.showScene);
        Global.addEventListener(DataEvent.GOTOSCENE1,this.changePage,this);
    }

    private tw(){
        egret.Tween.get(this.scnen1).to({scaleX:0,scaleY:0},800,egret.Ease.backIn).call(this.changePage,this);
        ConfigModel.getInstance().headUrl = __global.headimgurl.toString();
        this.scnen2.uheadIMG.updateImg();
    }
    private changePage(){
        if(this.contains(this.scnen1)==true){
            this.addChild(this.selectScene);
            this.removeChild(this.scnen1);
        }else if(this.contains(this.selectScene)==true){
            this.addChild(this.scnen2);
            this.scnen2.setText1();
            this.removeChild(this.selectScene);
        } else if(this.contains(this.showScene)==true){
            this.createGameScene();
            this.removeChild(this.showScene);
        }
    }

}


