var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/11/30.
 */
var Loadingview = (function (_super) {
    __extends(Loadingview, _super);
    function Loadingview() {
        _super.call(this);
        this.compNum = 0;
        this.bitmapComple = false;
        this.createScene();
    }
    var d = __define,c=Loadingview;p=c.prototype;
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        var url1 = "resource/assets/loading/cup.jpg";
        var url2 = "resource/assets/loading/cup1.jpg";
        var url3 = "resource/assets/loading/tit.png";
        var url4 = "resource/assets/loading/txt02.png";
        //this.timeOut1 = new egret.Timer(4000,0);
        //this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setProgress,this);
        //this.timeOut1.start();
        //this.bg0 = new BitmapDisplay;
        //this.bg0.load(url1);
        //this.addChild(this.bg0);
        this.bg = new egret.Shape;
        this.bg.graphics.beginFill(0xFFFFFF, 1);
        this.bg.graphics.drawRect(0, 0, this.width, this.height);
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
    };
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
    p.twa = function () {
        egret.Tween.get(this.txt02, { loop: true }).to({ alpha: 1, y: 400 }, 2000);
    };
    p.bitmapCom = function () {
        console.log("done");
        this.bitmapComple = true;
    };
    p.setProgress = function (current, total) {
        //console.log(this.bitmapComple,this.loadingComple);
        //if(this.bitmapComple == true && this.loadingComple == true){
        //    var dataEvent:DataEvent = new DataEvent(DataEvent.comple);
        //    this.dispatchEvent(dataEvent);
        //    this.timeOut1.stop();
        //}
    };
    return Loadingview;
})(DisplayScene);
egret.registerClass(Loadingview,"Loadingview");
//# sourceMappingURL=Loadingview.js.map