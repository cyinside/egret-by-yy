/**
 * Created by cyy on 16/1/18.
 */
class MusicControl extends DisplayScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private musicDiv = document.getElementById("bgmusic");
    private musicicon:BitmapDisplay;
    public static IsOn:boolean = true;
    private onAddToStage(){
        this.width = 640;
        this.height = 1030;
        this.musicicon = new BitmapDisplay;
        this.musicicon.setBitmapByName("musicon");
        this.musicicon.x = -300;
        this.musicicon.y = -495;
        this.musicicon.scaleX = this.musicicon.scaleY = 0.2;
        this.musicicon.touchEnabled = true;
        this.addChild(this.musicicon);
        this.musicicon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.musicHandle,this);

        if(MusicControl.IsOn == true){
            this.musicDiv["play"]();
        }

        this.setFullScreen();
    }

    private musicHandle(){
        if(MusicControl.IsOn == true){
            MusicControl.IsOn = false;
            this.stopMusic();
        }else{
            MusicControl.IsOn = true;
            this.musicOn();
        }
    }

    public musicOn(){
        this.musicicon.setBitmapByName("musicon");
        MusicControl.IsOn = true;
        this.musicDiv["play"]();
    }

    public stopMusic(){
        this.musicicon.setBitmapByName("musicoff");
        MusicControl.IsOn = false;
        this.musicDiv["pause"]();
    }
}