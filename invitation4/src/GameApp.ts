
class GameApp extends egret.DisplayObjectContainer {
    private loadingView:LoadingView;
    private scene1:Scene1;
    private scene2:Scene2;
    private scene3:Scene3;
    private pageNum:number =0;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private onAddToStage(event: egret.Event) {
        RES.registerAnalyzer(RES.PropertiesAnalyzer.TYPE,RES.PropertiesAnalyzer);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?1", "resource/");
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
        if(event.groupName == "preload") {
            ConfigModel.getInstance().initConfig();
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);

            var hr:string = location.href.split("#")[0];
            //var hr1:string = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation4/2/index.php?inum=3&uname=cyyyyyyyyy&url=http://wx.qlogo.cn/mmopen/Q3auHgzwzM5s2KD1YxzIEEI5zzA7fdyXgmKMaia5FMVPcUxnrJA2Du0TTek5ogsRgic8W0ibkAy59icqL3vWMj8xeFCZ2eBj093iaaHItsurfDaA/0&end&from=singlemessage&isappinstalled=0";
            //var hr:string = hr1.split("#")[0];
            if (hr.indexOf("?inum=") != -1) {
                //ConfigModel.getInstance().isShowPage = true;
                ConfigModel.getInstance().idNum = parseInt(hr.substring(hr.indexOf("?inum=") + 6, hr.indexOf("&uname")));
            }
            if (hr.indexOf("&uname=") != -1) {
                ConfigModel.getInstance().uNameTxt1 = decodeURI(hr.substring(hr.indexOf("&uname=") + 7, hr.indexOf("&url=")));
            }
            if (hr.indexOf("&url=") != -1) {
                ConfigModel.getInstance().headUrl1 = decodeURI(hr.substring(hr.indexOf("&url=") + 5, hr.indexOf("&end")));
                this.pageNum = 1;
            }else{
                this.pageNum = 2;
            }

            //this.wXHandle()
            egret.setTimeout(function(){
                JSSDK.getSignPackage(this.wXHandle,this);
            },this,1000);
        }

    }

    private wXHandle(){
        this.removeChild(this.loadingView);
        this.initScene(this.pageNum);
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private initScene(num:number):void{
        Global.addEventListener(DataEvent.GOTO_SCENE,this.createScene,this);
        //alert("1#"+ConfigModel.getInstance().uNameTxt);
        //alert("2#"+ConfigModel.getInstance().uNameTxt1);
        //if(ConfigModel.getInstance().uNameTxt1==ConfigModel.getInstance().uNameTxt){
        //    this.changeScene(2);
        //}else{
        //    this.changeScene(num);
        //}
        this.changeScene(num);
    }

    private createScene(e){
        this.changeScene(e.param.sceneID);
    }

    private changeScene(scene:number):void {
        switch (scene){
            case 1:
                if(!this.scene1){
                    this.scene1 = new Scene1;
                }

                this.addChild(this.scene1);
                StageUtil.setHorizontalCenter(this.scene1);
                break;
            case 2:
                if(!this.scene2){
                    this.scene2 = new Scene2;
                }

                if(this.contains(this.scene1)){
                    egret.Tween.get(this.scene1).to({alpha:0},500,egret.Ease.backInOut)
                        .call(function(){
                            this.removeChild(this.scene1);
                            this.addChild(this.scene2);
                            this.scene2.alpha = 0;
                            StageUtil.setHorizontalCenter(this.scene2);

                            egret.Tween.get(this.scene2).to({alpha:1},300,egret.Ease.sineIn);
                        },this);
                }else{
                    this.addChild(this.scene2);
                    this.scene2.alpha = 0;
                    StageUtil.setHorizontalCenter(this.scene2);
                    egret.Tween.get(this.scene2).to({alpha:1},300,egret.Ease.sineIn);
                }
                break;
            case 3:
                if(!this.scene3){
                    this.scene3 = new Scene3;
                }

                if(this.contains(this.scene2)){
                    egret.Tween.get(this.scene2).to({alpha:0},500,egret.Ease.backInOut)
                        .call(function(){
                            this.removeChild(this.scene2);
                            this.addChild(this.scene3);
                            this.scene3.alpha = 0;
                            StageUtil.setHorizontalCenter(this.scene3);

                            egret.Tween.get(this.scene3).to({alpha:1},300,egret.Ease.sineIn);
                        },this);
                }else{
                    this.addChild(this.scene3);
                    this.scene3.alpha = 0;
                    StageUtil.setHorizontalCenter(this.scene3);
                    egret.Tween.get(this.scene3).to({alpha:1},300,egret.Ease.sineIn);
                }
                break;

        }
    }

}


