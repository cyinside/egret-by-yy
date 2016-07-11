/**
 * Created by cyy on 15/10/29.
 */
class Musicicon extends DisplayScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private musicicon:BitmapDisplay;
    private sound:egret.Sound;
    private loader:egret.URLLoader;
    private channel: egret.SoundChannel;
    public static IsOn:boolean = true;
    private onAddToStage(){
        this.width = 640;
        this.height = 1030;
        this.musicicon = new BitmapDisplay;
        this.musicicon.setBitmapByName("musicon");
        this.musicicon.x = 200;
        this.musicicon.y = -500;
        this.musicicon.touchEnabled = true;
        this.addChild(this.musicicon);

        this.sound = new egret.Sound();
        this.sound.addEventListener(egret.Event.COMPLETE, this.play, this);    //监听声音加载完成
        this.sound.load("resource/assets/music1.mp3");

        this.setFullScreen();
    }

    private play() {
        this.stop();                                                        //重置一下声音
        this.channel = this.sound.play(0, 0);
        this.channel.position = 0.05;
    }

    private stop() {
        if (this.channel) {
            this.channel.stop();
            this.channel = null;
        }
    }

    public musicOn(){
        this.musicicon.setBitmapByName("musicon");
        this.addChild(this.musicicon);
        this.channel = this.sound.play(0, 0);
        Musicicon.IsOn = true;
    }

    public musicRemove(){
        this.sound.close();
        Musicicon.IsOn = true;
    }

    public stopMusic(){
        this.musicicon.setBitmapByName("musicoff");
        this.addChild(this.musicicon);
        this.channel.stop();
        Musicicon.IsOn = false;
    }
}