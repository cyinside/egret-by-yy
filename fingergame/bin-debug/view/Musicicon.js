var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/10/29.
 */
var Musicicon = (function (_super) {
    __extends(Musicicon, _super);
    function Musicicon() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Musicicon;p=c.prototype;
    p.onAddToStage = function () {
        this.width = 640;
        this.height = 1030;
        this.musicicon = new BitmapDisplay;
        this.musicicon.setBitmapByName("musicon");
        this.musicicon.x = 200;
        this.musicicon.y = -500;
        this.musicicon.touchEnabled = true;
        this.addChild(this.musicicon);
        this.sound = new egret.Sound();
        this.sound.addEventListener(egret.Event.COMPLETE, this.play, this); //监听声音加载完成
        this.sound.load("resource/assets/music1.mp3");
        this.setFullScreen();
    };
    p.play = function () {
        this.stop(); //重置一下声音
        this.channel = this.sound.play(0, 0);
        this.channel.position = 0.05;
    };
    p.stop = function () {
        if (this.channel) {
            this.channel.stop();
            this.channel = null;
        }
    };
    p.musicOn = function () {
        this.musicicon.setBitmapByName("musicon");
        this.addChild(this.musicicon);
        this.channel = this.sound.play(0, 0);
        Musicicon.IsOn = true;
    };
    p.musicRemove = function () {
        this.sound.close();
        Musicicon.IsOn = true;
    };
    p.stopMusic = function () {
        this.musicicon.setBitmapByName("musicoff");
        this.addChild(this.musicicon);
        this.channel.stop();
        Musicicon.IsOn = false;
    };
    Musicicon.IsOn = true;
    return Musicicon;
})(DisplayScene);
egret.registerClass(Musicicon,"Musicicon");
//# sourceMappingURL=Musicicon.js.map