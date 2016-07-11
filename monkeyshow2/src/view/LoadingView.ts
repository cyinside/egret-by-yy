/**
 * Created by cyy on 16/1/17.
 */
class LoadingView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg0:BitmapDisplay;
    private bg00:BitmapDisplay;
    private p1:BitmapDisplay;
    private p2:BitmapDisplay;
    private p3:BitmapDisplay;
    private p4:BitmapDisplay;
    private logo:BitmapDisplay;
    private loading:BitmapDisplay;
    private timeOut2:egret.Timer;
    private compNum:number=0;
    private twNum:number=0;
    public bitmapComple:boolean = false;
    public loadingComple:Boolean = false;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        var url1:string="resource/assets/red1.png";
        var url2:string="resource/assets/red2.png";
        var url3:string="resource/assets/red3.png";
        var url4:string="resource/assets/redbg.jpg";

        this.timeOut2 = new egret.Timer(1000,0);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER,this.setProgress,this);
        this.timeOut2.start();

        this.bg0 = new BitmapDisplay;
        this.bg0.load(url1);
        this.bg0.x = 0;
        this.bg0.y = 0;
        this.bg0.alpha = 1;
        this.addChild(this.bg0);

        this.p1 = new BitmapDisplay;
        this.p1.load(url2);
        this.p1.alpha = 1;
        this.p1.x = 0;
        this.p1.y = 600;
        this.addChild(this.p1);

        this.p2 = new BitmapDisplay;
        this.p2.load(url3);
        this.p2.alpha = 1;
        this.p2.y = 560;
        this.p2.x = 225;
        this.addChild(this.p2);

        this.bg00 = new BitmapDisplay;
        this.bg00.load(url4);
        this.addChild(this.bg00);

        var image = document.getElementById("img");
        var texture:egret.Texture = new egret.Texture();
        texture._setBitmapData(image);
        //
        //Global.addEventListener(DataEvent.loadcomp,this.loadcomple,this);
        this.setFullScreen();
    }

    //public loadcomple(){
    //        this.compNum++;
    //        console.log(this.compNum);
    //    if(this.compNum==8){
    //        this.timeOut1.start();
    //    }
    //}

    //private tw(){
    //    this.twNum++;
    //    if(this.twNum==1){
    //        this.addChild(this.p1);
    //    }else if(this.twNum==2){
    //        this.addChild(this.p2);
    //    }else if(this.twNum==3){
    //        this.addChild(this.p2);
    //    }else if(this.twNum==4){
    //        this.p4.alpha = 0;
    //        this.addChild(this.p4);
    //        egret.Tween.get(this.p4).to({alpha:1},1000).call(this.tw1,this);
    //    }
    //}

    private tw(){
            this.twNum++;
            if(this.twNum==1){
                egret.Tween.get(this.p1).to({alpha:1},600);
            }else if(this.twNum==2){
                egret.Tween.get(this.p2).to({alpha:1},600);
            }else if(this.twNum==3){
                egret.Tween.get(this.p3).to({alpha:1},600);
            }else if(this.twNum==4){
                egret.Tween.get(this.p4).to({alpha:1},1000).call(this.tw1,this);
            }
    }

    private tw1(){
        this.p1.alpha = this.p2.alpha = this.p3.alpha = this.bg0.alpha = 0;
        this.addChild(this.logo);
        this.logo.alpha = 1;
        //egret.Tween.get(this.logo).to({alpha:1},1000).call(this.bitmapCom,this);
        this.bitmapCom();
    }

    private bitmapCom(){
        console.log("done");
        this.bitmapComple = true;
    }

    public setProgress(current, total):void {
        console.log(this.loadingComple);
        if(this.loadingComple == true){
            this.bg00.touchEnabled = true;
            this.bg00.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        }
    }

    private touchHandle(){
        this.removeChild(this.bg00);
        egret.Tween.get(this.p2).to({alpha:0},800);
        egret.Tween.get(this.bg0).to({y:-this.bg0.height},800);
        egret.Tween.get(this.p1).to({y:this.height+this.p2.height},800).call(this.gotoS1);
    }

    private gotoS1(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.comple);
        this.dispatchEvent(dataEvent);
    }
}