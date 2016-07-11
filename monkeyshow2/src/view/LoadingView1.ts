/**
 * Created by cyy on 16/1/17.
 */
class LoadingView1 extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private musicBut:MusicControl;
    private bg0:BitmapDisplay;
    private bg00:BitmapDisplay;
    private p1:BitmapDisplay;
    private p2:BitmapDisplay;
    private p3:BitmapDisplay;
    private p4:BitmapDisplay;
    private logo:BitmapDisplay;
    private loading:BitmapDisplay;
    private compNum:number=0;
    private twNum:number=0;
    private timeOut1:egret.Timer;
    private timeOut2:egret.Timer;
    public bitmapComple:boolean = false;
    public loadingComple:Boolean = false;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.musicBut = new MusicControl;
        this.addChild(this.musicBut);

       var url1:string="resource/assets/loading/p0.jpg";
       var url2:string="resource/assets/loading/p1.jpg";
       var url3:string="resource/assets/loading/p2.jpg";
       var url4:string="resource/assets/loading/p3.jpg";
       var url5:string="resource/assets/loading/p4.jpg";
       var url6:string="resource/assets/loading/logo.png";
       var url7:string="resource/assets/loading/Loading.png";
       var url8:string="resource/assets/loading/bg00.png";

        this.timeOut1 = new egret.Timer(800,5);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.tw,this);

        this.timeOut2 = new egret.Timer(1000,0);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER,this.setProgress,this);
        this.timeOut2.start();

        this.bg0 = new BitmapDisplay;
        this.bg0.load(url1);
        this.bg0.x = 78;
        this.bg0.y = 90;
        this.addChild(this.bg0);

        this.p1 = new BitmapDisplay;
        this.p1.load(url2);
        this.p1.alpha = 0;
        this.p1.x = 78;
        this.p1.y = 90;
        this.addChild(this.p1);

        this.p2 = new BitmapDisplay;
        this.p2.load(url3);
        this.p2.alpha = 0;
        this.p2.x = 78;
        this.p2.y = 90;
        this.addChild(this.p2);

        this.p3 = new BitmapDisplay;
        this.p3.load(url4);
        this.p3.alpha = 0;
        this.p3.x = 78;
        this.p3.y = 90;
        this.addChild(this.p3);

        this.p4 = new BitmapDisplay;
        this.p4.load(url5);
        this.p4.alpha = 0;
        this.p4.x = 318;
        this.p4.y = 503;
        this.p4.anchorOffsetX = 240;
        this.p4.anchorOffsetY = 413;
        this.addChild(this.p4);

        this.logo = new BitmapDisplay;
        this.logo.load(url6);
        this.logo.x = 270;
        this.logo.y = 150;
        this.addChild(this.logo);
        this.logo.alpha = 1;

        this.loading = new BitmapDisplay;
        this.loading.load(url7);
        this.loading.x = 270;
        this.loading.y = 860;
        this.loading.alpha = 0;
        this.addChild(this.loading);
        this.setFullScreen();

        this.bg00 = new BitmapDisplay;
        this.bg00.load(url8);
        this.addChild(this.bg00);

        Global.addEventListener(DataEvent.loadcomp,this.loadcomple,this);
    }

    public loadcomple(){
            this.compNum++;
            console.log(this.compNum);
        if(this.compNum==8){
            this.timeOut1.start();
        }
    }

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
        console.log(this.bitmapComple,this.loadingComple);
        if(this.bitmapComple == true && this.loadingComple == true){
            this.timeOut2.stop();
            egret.Tween.get(this.p4).to({scaleX:2.2,scaleY:2.2},1500,egret.Ease.sineInOut).call(this.gotoS1,this);
        }else if(this.bitmapComple == true && this.loadingComple == false){
            this.addChild(this.loading);
            egret.Tween.get(this.loading,{loop:true}).to({alpha:1},1000).to({alpha:0},1000);
        }
    }

    private gotoS1(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.comple);
        this.dispatchEvent(dataEvent);
    }
}