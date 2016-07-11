/**
 * Created by cyy on 15/12/15.
 */
class Scenea extends DisplayScene {
    public constructor() {
        super();
        this.createScene();
    }

    private bg0:BitmapDisplay;
    private txt01:BitmapDisplay;
    private txt02:BitmapDisplay;
    private tit:BitmapDisplay;
    private sound:egret.Sound;
    private channel: egret.SoundChannel;
    private createScene() {
        this.width = 640;
        this.height = 1030;

        this.bg0 = new BitmapDisplay;
        this.bg0.setBitmapByName("bg0");
        this.addChild(this.bg0);

        this.txt01 = new BitmapDisplay;
        this.txt01.setBitmapByName("txt01");
        this.txt01.x = 230;
        this.txt01.y = 400;
        this.txt01.alpha = 0;
        this.addChild(this.txt01);

        this.txt02 = new BitmapDisplay;
        this.txt02.setBitmapByName("txt02");
        this.txt02.x = 270;
        this.txt02.y = 400;
        this.txt02.alpha = 0;
        this.addChild(this.txt02);

        this.tit = new BitmapDisplay;
        this.tit.setBitmapByName("tit");
        this.setHorizontalCenter(this.tit);
        this.tit.x = 230;
        this.tit.y = 800;
        this.tit.alpha = 0;
        this.addChild(this.tit);

        //this.sound = new egret.Sound();
        //this.sound.addEventListener(egret.Event.COMPLETE, this.play, this);    //监听声音加载完成
        //this.sound.load("resource/assets/bgmusic.mp3");

        this.setFullScreen();
        this.tw();


        JSSDK.getWeiXinShareAppMessage(2,ConfigModel.wx_title,ConfigModel.link,
            ConfigModel.imgURL,ConfigModel.getUserName()+ConfigModel.wx_desc);
        JSSDK.getWeiXinShareTimeline(2,ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);
        console.log(ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);

        var musicDiv = document.getElementById("bgmusic");
        musicDiv["play"]();

    }

    //private play() {
    //    this.stop();
    //                                                            //重置一下声音
    //    this.channel = this.sound.play(0, 0);
    //}
    //
    //private stop() {
    //    if (this.channel) {
    //        this.channel.stop();
    //        this.channel = null;
    //    }
    //}


    private tw(){
            egret.Tween.get(this.txt01).to({alpha:1},1500).wait(2000)
                .to({alpha:0},1500).call(this.tw2,this);
    }

    private tw2(){
        egret.Tween.get(this.txt02).to({alpha:1},1500).wait(1500).call(this.tw3,this);
    }

    private tw3(){
        egret.Tween.get(this.tit).to({alpha:1},1500).wait(1500).call(this.gotoS1,this);
    }

    private gotoS1(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE1);
        this.dispatchEvent(dataEvent);
    }

}
