/**
 * Created by cyy on 16/5/12.
 */
class EndScene1 extends DisplayScrollerScene{
    private bg:UIBitmapDisplay;
    private text1:ETextField;
    private shareBtn:BitmapDisplay;
    private replayBtn:BitmapDisplay;
    private title:egret.Bitmap;
    private scoreInfo:ScoreInfo;
    private shareArrow:BitmapDisplay;

    public constructor(){
        super();
        this.width = 640;
        this.height = 1030;

        this.bg = new UIBitmapDisplay("bg4");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        //
        //this.text1 = new ETextField();
        //this.text1.size = 28;
        //this.text1.textAlign = egret.HorizontalAlign.CENTER;
        //this.text1.lineSpacing = 10;
        //this.text1.y = 390;
        //this.addChild(this.text1);
        //this.setHorizontalCenter(this.text1);
        //
        //this.shareBtn = new BitmapDisplay("share");
        //this.group.addChild(this.shareBtn);
        //this.shareBtn.touchEnabled = true;
        //this.shareBtn.y = 660;
        //this.shareBtn.x = 120;

        this.replayBtn = new BitmapDisplay("replay");
        this.group.addChild(this.replayBtn);
        this.replayBtn.touchEnabled = true;
        this.setHorizontalCenter(this.replayBtn);
        this.replayBtn.y = 750;
        //this.replayBtn.x = 321;

        this.setFullScreen();
        this.setViewRect();
        //this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onReplayHandler,this);

        this.shareArrow = new BitmapDisplay();

        //this.setScore();
        //JSSDK.getWeiXinShareTimeline(str2,ConfigModel.getInstance().wx_link, ConfigModel.getInstance().wx_share_img);
        //JSSDK.getWeiXinShareAppMessage(ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_link,
        //    ConfigModel.getInstance().wx_share_img,str2);
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

    public remove():void{
        //this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onShareHandler,this);
        //this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onReplayHandler,this);
    }
}