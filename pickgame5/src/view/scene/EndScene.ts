class EndScene extends DisplayScrollerScene{

    private bg:UIBitmapDisplay;
    private infobg:UIBitmapDisplay;
    private text1:ETextField;
    private shareBtn:BitmapDisplay;
    private replayBtn:BitmapDisplay;
    private title:egret.Bitmap;
    private scoreInfo:ScoreInfo;
    private shareArrow:BitmapDisplay;
    private infoBut:BitmapDisplay;
    private infoBut1:BitmapDisplay;

    public constructor(){
        super();
        this.width = 640;
        this.height = 1030;

        this.bg = new UIBitmapDisplay("bg3");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);

        this.text1 = new ETextField();
        this.text1.size = 28;
        this.text1.textAlign = egret.HorizontalAlign.CENTER;
        this.text1.lineSpacing = 10;
        this.text1.y = 390;
        //this.group.addChild(this.text1);
        this.setHorizontalCenter(this.text1);

        this.shareBtn = new BitmapDisplay("share");
        this.group.addChild(this.shareBtn);
        this.shareBtn.touchEnabled = true;
        this.shareBtn.y = 700;
        this.shareBtn.x = 105;

        this.replayBtn = new BitmapDisplay("replay");
        this.group.addChild(this.replayBtn);
        this.replayBtn.touchEnabled = true;
        this.replayBtn.y = 700;
        this.replayBtn.x = 370;
        //
        //this.infoBut = new BitmapDisplay("infoBut");
        //this.group.addChild(this.infoBut);
        //this.infoBut.touchEnabled = true;
        //this.infoBut.y = 820;
        //this.infoBut.scaleY = this.infoBut.scaleX = 0.8;
        //this.infoBut.anchorOffsetX = this.infoBut.width/2;
        //this.infoBut.x = this.width/2;

        this.infobg = new UIBitmapDisplay("bg5");
        this.setHorizontalCenter(this.infobg);
        this.infobg.touchEnabled = true;
        this.infobg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeinfo,this);

        this.infoBut1 = new BitmapDisplay("infoBut");
        this.infoBut1.touchEnabled = true;
        this.infoBut1.y =680;
        this.setHorizontalCenter(this.infoBut1);

        this.setFullScreen();
        this.setViewRect();
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onReplayHandler,this);
        //this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.oninfoHandler,this);
        this.infoBut1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.makeTel,this);

        this.shareArrow = new BitmapDisplay();

        //this.setScore();

        JSSDK.getWeiXinShareTimeline(2,ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link,ConfigModel.getInstance().wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link,ConfigModel.getInstance().wx_share_img,ConfigModel.getInstance().wx_friend_desx);
        Global.addEventListener(DataEvent.IS_SHARE,this.oninfoHandler,this);
    }

    private setScore():void{
        var score:number = ConfigModel.getInstance().roleInfo.score;
        this.scoreInfo = ConfigModel.getInstance().getLevelByScore(ConfigModel.getInstance().roleInfo.score);

        this.title = new egret.Bitmap();
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE,this.loadComplete,this);
        loader.load(new egret.URLRequest("resource/assets/title/" + this.scoreInfo.id + ".png"));

        var str1:string = this.scoreInfo.text1.replace("xx",score.toString());
        var str2:string = this.scoreInfo.text2.replace("xx",score.toString());

        this.text1.setText(str1);
        this.setHorizontalCenter(this.text1);
    }

    private loadComplete(event:egret.Event):void{
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        this.title = new egret.Bitmap(loader.data);
        this.addChild(this.title);
        this.setHorizontalCenter(this.title);
        this.title.y = 200;
    }

    private onShareHandler(e:egret.TouchEvent):void{
        this.shareArrow.setBitmapByName("share_arrow");
        this.addChild(this.shareArrow);
        this.shareArrow.x = 530;
        this.shareArrow.y = 50;
        egret.Tween.get(this.shareArrow,{loop:true}).to({alpha:0},500,egret.Ease.sineInOut).to({alpha:1},500,egret.Ease.sineInOut);
    }

    private onReplayHandler(e:egret.TouchEvent):void{
        egret.Tween.removeAllTweens();
        var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 2;
        Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
    }

    private oninfoHandler(){
        if(ConfigModel.getInstance().Is_win==true){
            egret.setTimeout(function(){
                this.removeChild(this.shareArrow);
                this.group.addChild(this.infobg);
                this.group.addChild(this.infoBut1);
            },this,1000);
        }
    }

    private removeinfo(){
        this.group.removeChild(this.infobg);
        this.group.removeChild(this.infoBut1);
    }

    private makeTel(){
        window.location.href = "tel:18620988188";
    }

    public remove():void{
        this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onReplayHandler,this);
    }
}