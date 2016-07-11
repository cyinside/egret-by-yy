/**
 * Created by cyy on 15/11/30.
 */
class Loadingview extends DisplayScene {
    public constructor() {
        super();
        this.createScene();
    }

    private bg0:BitmapDisplay;
    private bg:egret.Shape;
    private txt01:BitmapDisplay;
    private txt02:BitmapDisplay;
    private tit:BitmapDisplay;
    private compNum:number=0;
    public bitmapComple:Boolean = false;
     private timeOut1:egret.Timer;
    private createScene() {
        this.width = 640;
        this.height = 1030;

        var url1:string = "resource/assets/loading/cup.jpg";
        var url2:string = "resource/assets/loading/cup1.jpg";
        var url3:string = "resource/assets/loading/tit.png";
        var url4:string = "resource/assets/loading/txt02.png";

        //this.timeOut1 = new egret.Timer(4000,0);
        //this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setProgress,this);
        //this.timeOut1.start();

        //this.bg0 = new BitmapDisplay;
        //this.bg0.load(url1);
        //this.addChild(this.bg0);

        this.bg = new egret.Shape;
        this.bg.graphics.beginFill(0xFFFFFF,1);
        this.bg.graphics.drawRect(0,0,this.width,this.height);
        this.bg.graphics.endFill();
        this.addChild(this.bg);


        this.txt01 = new BitmapDisplay;
        this.txt01.load(url1);
        this.txt01.x = 230;
        this.txt01.y = 400;
        this.txt01.alpha = 1;
        this.addChild(this.txt01);

        this.txt02 = new BitmapDisplay;
        this.txt02.load(url2);
        this.txt02.x = 295;
        this.txt02.y = 420;
        this.txt02.alpha = 0;
        this.addChild(this.txt02);

        //this.tit = new BitmapDisplay;
        //this.tit.load(url3);
        //this.setHorizontalCenter(this.tit);
        //this.tit.x = 230;
        //this.tit.y = 800;
        //this.tit.alpha = 0;
        //this.addChild(this.tit);

        //Global.addEventListener(DataEvent.loadcomp,this.loadcomple,this);
        this.setFullScreen();
        this.twa();
    }

    //private loadcomple(){
    //    this.compNum++;
    //    console.log(this.compNum);
    //    this.tw();
    //}

    //private tw(){
    //    if(this.compNum == 4){
    //        egret.Tween.get(this.txt01).to({alpha:1},1500).wait(2000)
    //        .to({alpha:0},1500).call(this.tw2,this);
    //    }
    //}
    //
    //private tw2(){
    //    egret.Tween.get(this.txt02).to({alpha:1},1500).wait(1500).call(this.tw3,this);
    //}
    //
    //private tw3(){
    //    egret.Tween.get(this.tit).to({alpha:1},1500).call(this.bitmapCom,this);
    //}

    private twa(){
        egret.Tween.get(this.txt02,{loop:true}).to({alpha:1,y:400},2000);
    }

    private bitmapCom(){
        console.log("done");
        this.bitmapComple = true;
    }

    public setProgress(current, total):void {
        //console.log(this.bitmapComple,this.loadingComple);
        //if(this.bitmapComple == true && this.loadingComple == true){
        //    var dataEvent:DataEvent = new DataEvent(DataEvent.comple);
        //    this.dispatchEvent(dataEvent);
        //    this.timeOut1.stop();
        //}
    }


}