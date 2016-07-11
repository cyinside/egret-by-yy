/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:BitmapDisplay;
    private jzTween:Jztween;
    private hangTween:HandTween;
    private share:BitmapDisplay;
    private b1:BitmapDisplay;
    private b2:BitmapDisplay;
    private timeOut1:egret.Timer;
    private uesername:egret.TextField;
    private musicBut:MusicControl;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.addChild(this.bg1);

        this.b1 = new BitmapDisplay;
        this.b1.setBitmapByName("b1");
        this.b1.alpha = 1;
        this.addChild(this.b1);

        this.share = new BitmapDisplay;
        this.share.setBitmapByName("share");
        this.share.x = this.width-this.share.width-10;
        this.share.y = 10;
        this.share.alpha = 1;

        this.uesername = new egret.TextField;
        this.uesername.text = __global.nickname;
        //this.uesername.text ="小明";
        this.uesername.textColor = 0xe3caa3;
        this.uesername.size = 30;
        this.uesername.x = 310;
        this.uesername.y = 120;
        this.addChild(this.uesername);

        this.jzTween = new Jztween;
        this.jzTween.anchorOffsetX = this.width/2;
        this.jzTween.y = 40;
        this.setHorizontalCenter(this.jzTween);
        this.addChild(this.jzTween);
        this.jzTween.addEventListener(DataEvent.jzComple,this.addHand,this);
        this.jzTween.addEventListener(DataEvent.GotoScene2,this.gotoS2,this)

        this.hangTween = new HandTween;
        this.hangTween.x = 380;
        this.hangTween.y = 960;
        this.setFullScreen();

        this.musicBut = new MusicControl;
        StageUtil.setVerticalCenter(this.musicBut);
        StageUtil.setHorizontalCenter(this.musicBut);
        this.addChild(this.musicBut);

        this.timeOut1 = new egret.Timer(600,0);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.bitmapTW,this);
        this.timeOut1.start();

        JSSDK.getWeiXinShareAppMessage(2,"来自"+__global.nickname+ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link
        ,ConfigModel.getInstance().wx_share_img,ConfigModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(2,"来自"+__global.nickname+ConfigModel.getInstance().wx_title,ConfigModel.getInstance().wx_share_link
            ,ConfigModel.getInstance().wx_share_img);
        console.log(ConfigModel.getInstance().wx_share_img);
    }

    private  num:number = 1;
    private bitmapTW(){
        if(this.num == 1){
            this.b1.setBitmapByName("b1");
            this.num = 2;
            if(this.share){
                this.share.alpha = 0;
            }
        }else if(this.num == 2){
            this.b1.setBitmapByName("b2");
            this.num = 1;
            if(this.share){
                this.share.alpha = 1;
            }
        }
    }

    private addHand(){
        this.addChild(this.share);
        this.addChild(this.hangTween);
    }

    private gotoS2(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.GotoScene2FromS2);
        this.dispatchEvent(dataEvent);
    }
}