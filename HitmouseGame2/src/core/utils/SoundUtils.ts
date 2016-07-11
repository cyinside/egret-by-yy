class SoundUtils extends BaseClass {

    private sound:egret.Sound;
    private channel:egret.SoundChannel;

    public constructor() {
        super();
    }

    public play(resName?:string,startTime?: number, loops?: number):void{
        this.sound = RES.getRes(resName);
        this.channel = this.sound.play(startTime,loops);
    }

    public stop():void{
        this.channel.stop();
    }

}