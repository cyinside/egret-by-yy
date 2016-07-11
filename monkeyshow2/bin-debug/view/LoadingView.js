/**
 * Created by cyy on 16/1/17.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        _super.call(this);
        this.compNum = 0;
        this.twNum = 0;
        this.bitmapComple = false;
        this.loadingComple = false;
        this.createScnen();
    }
    var d = __define,c=LoadingView,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        var url1 = "resource/assets/red1.png";
        var url2 = "resource/assets/red2.png";
        var url3 = "resource/assets/red3.png";
        this.timeOut2 = new egret.Timer(1000, 0);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER, this.setProgress, this);
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
        //this.bg00 = new BitmapDisplay;
        //this.bg00.load(url8);
        //this.addChild(this.bg00);
        //
        //Global.addEventListener(DataEvent.loadcomp,this.loadcomple,this);
    };
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
    p.tw = function () {
        this.twNum++;
        if (this.twNum == 1) {
            egret.Tween.get(this.p1).to({ alpha: 1 }, 600);
        }
        else if (this.twNum == 2) {
            egret.Tween.get(this.p2).to({ alpha: 1 }, 600);
        }
        else if (this.twNum == 3) {
            egret.Tween.get(this.p3).to({ alpha: 1 }, 600);
        }
        else if (this.twNum == 4) {
            egret.Tween.get(this.p4).to({ alpha: 1 }, 1000).call(this.tw1, this);
        }
    };
    p.tw1 = function () {
        this.p1.alpha = this.p2.alpha = this.p3.alpha = this.bg0.alpha = 0;
        this.addChild(this.logo);
        this.logo.alpha = 1;
        //egret.Tween.get(this.logo).to({alpha:1},1000).call(this.bitmapCom,this);
        this.bitmapCom();
    };
    p.bitmapCom = function () {
        console.log("done");
        this.bitmapComple = true;
    };
    p.setProgress = function (current, total) {
        console.log(this.loadingComple);
        if (this.loadingComple == true) {
            this.p2.touchEnabled = true;
            this.p2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        }
    };
    p.touchHandle = function () {
        egret.Tween.get(this.p2).to({ scaleX: 0 }, 800);
        egret.Tween.get(this.bg0).to({ y: -this.bg0.height }, 600);
        egret.Tween.get(this.p1).to({ y: this.height + this.p2.height }, 800).call(this.gotoS1);
    };
    p.gotoS1 = function () {
        //var dataEvent:DataEvent = new DataEvent(DataEvent.comple);
        //this.dispatchEvent(dataEvent);
        alert("111");
    };
    return LoadingView;
})(DisplayScene);
egret.registerClass(LoadingView,'LoadingView');
//# sourceMappingURL=LoadingView.js.map