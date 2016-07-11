/**
 * Created by cyy on 16/1/18.
 */
var MusicControl = (function (_super) {
    __extends(MusicControl, _super);
    function MusicControl() {
        _super.call(this);
        this.musicDiv = document.getElementById("bgmusic");
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=MusicControl,p=c.prototype;
    p.onAddToStage = function () {
        this.width = 640;
        this.height = 1030;
        this.musicicon = new BitmapDisplay;
        this.musicicon.setBitmapByName("musicon");
        this.musicicon.x = -300;
        this.musicicon.y = -495;
        this.musicicon.scaleX = this.musicicon.scaleY = 0.2;
        this.musicicon.touchEnabled = true;
        this.addChild(this.musicicon);
        this.musicicon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicHandle, this);
        if (MusicControl.IsOn == true) {
            this.musicDiv["play"]();
        }
        this.setFullScreen();
    };
    p.musicHandle = function () {
        if (MusicControl.IsOn == true) {
            MusicControl.IsOn = false;
            this.stopMusic();
        }
        else {
            MusicControl.IsOn = true;
            this.musicOn();
        }
    };
    p.musicOn = function () {
        this.musicicon.setBitmapByName("musicon");
        MusicControl.IsOn = true;
        this.musicDiv["play"]();
    };
    p.stopMusic = function () {
        this.musicicon.setBitmapByName("musicoff");
        MusicControl.IsOn = false;
        this.musicDiv["pause"]();
    };
    MusicControl.IsOn = true;
    return MusicControl;
})(DisplayScene);
egret.registerClass(MusicControl,'MusicControl');
//# sourceMappingURL=MusicControl.js.map