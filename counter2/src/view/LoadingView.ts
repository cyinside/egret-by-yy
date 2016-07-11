/**
 * Created by cyy on 16/4/28.
 */
class LoadingView extends DisplayScene {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.createScnen();
    }

    private loadingBg:BitmapDisplay;
    private bitmap:BitmapDisplay;
    private timeOut:egret.Timer;
    private textField:egret.TextField;
    private createScnen() {
        this.loadingBg = new BitmapDisplay("loadingBg");
        this.addChild(this.loadingBg);

        this.bitmap = new BitmapDisplay("bit1");
        this.setHorizontalCenter(this.bitmap);
        this.setVerticalCenter(this.bitmap);
        this.addChild(this.bitmap);

        this.timeOut = new egret.Timer(400,-1);
        this.timeOut.addEventListener(egret.TimerEvent.TIMER,this.changeBit,this);
        this.timeOut.start();

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 800;
        this.textField.height = 100;
        this.textField.textAlign = "center";

        this.setFullScreen();
    }

    private num:number =1;
    private changeBit(){
        if(this.num==1){
            this.num=2;
            this.bitmap.setBitmapByName("bit2");
        }else if(this.num==2){
            this.num=1;
            this.bitmap.setBitmapByName("bit1");
        }
    }

    public setProgress(current, total):void {
        var num1:number = Math.floor((current/total)*100);
        this.textField.text = num1.toString()+"%";
        this.setHorizontalCenter(this.textField);
    }
}