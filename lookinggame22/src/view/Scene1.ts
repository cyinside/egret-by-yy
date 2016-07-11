/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.createScnen();
        this.stage.dirtyRegionPolicy = "off";
    }

    private bg1:BitmapDisplay;
    private bg0:BitmapDisplay;
    private textNum:number;
    private countdown:number=2;
    private timeOut1:egret.Timer;
    private timeOut2:egret.Timer;
    private timeOut3:egret.Timer;
    private num:number = 0;
    private stop:boolean = false;
    public showTimer2:egret.TextField;
    private result1:ResultScene;
    public timeNum:number = 0;
    private retryBut:BitmapDisplay;
    private lotteryPage:LotteryPage;
    public isTouch:boolean = false;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.timeOut1 = new egret.Timer(1000,3);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setCountDown,this);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.setPageTime,this);
        this.timeOut1.start();

        this.timeOut3 = new egret.Timer(1000,3);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER,this.setCountDown,this);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.setPageTime,this);

        this.bg0 = new BitmapDisplay("bg1");
        this.addChild(this.bg0);
        this.setHorizontalCenter(this.bg0);
        this.setVerticalCenter(this.bg0);

        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("pa12");
        this.addChild(this.bg1);
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
        this.bg1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle1,this);
        this.bg1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.longTouchTime,this);

        this.showTimer2 = new egret.TextField();
        this.showTimer2.alpha = 0;
        this.addChild(this.showTimer2);

        console.log(this.textNum);

        this.resetBut = new BitmapDisplay("resetBut");
        this.setHorizontalCenter(this.resetBut);
        this.setVerticalCenter(this.resetBut);
        this.resetBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeRemoveBut,this);
        this.resetBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reset,this);

        this.result1 = new ResultScene;
        this.result1.touchEnabled = true;
        this.result1.anchorOffsetX = this.result1.width/2;
        this.result1.anchorOffsetY = this.result1.height/2;
        this.result1.x = this.width/2;
        this.result1.y = this.height/2;
        this.result1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.isTouchHandle,this);

        this.lotteryPage = new LotteryPage;
        this.setHorizontalCenter(this.lotteryPage);
        this.setVerticalCenter(this.lotteryPage);

        this.retryBut = new BitmapDisplay("retryBut");
        this.setHorizontalCenter(this.retryBut);
        this.setVerticalCenter(this.retryBut);
        this.retryBut.touchEnabled = true;
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeRetry,this);

        this.setFullScreen();
        Global.addEventListener(DataEvent.STOP,this.setStop,this);
        Global.addEventListener(DataEvent.GAMERETRY,this.noPrizeRetry,this);
        Global.addEventListener(DataEvent.GAMERETRY1,this.removeRetry,this);
        Global.addEventListener(DataEvent.LOADFAIL,this.loadFailHandle,this);
    }

    private loadFailHandle(){
        this.isTouch = false;
        this.result1.touchEnabled = true;
    }

    private setCountDown(){
        console.log(this.countdown);
        this.countdown--;

        //this.addChild(this.bg1);
        this.bg1.setBitmapByName("pa1"+this.countdown);
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
    }

    private setPageTime(){
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    private setStop(){
        console.log("stop");
        this.stop = true;
        this.bg1.touchEnabled = false;
        Global.dispatchEvent(DataEvent.TIMESTOP,this);
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    private onEnterFrameHandler(){
        this.setPageTime1();
    }

    private setPageTime1(){
        this.num++;
        //this.fristTime = false;
        if(this.num==15&&this.stop == false){
            this.num = 0;
            this.setPage();
            this.is_Reset=false;
        }
    }

    private isTextNum:boolean=false;
    private setPage(){
        this.textNum = Math.floor(Math.random()*11+1);
        this.textNum = 9;

        if(this.textNum==9){
            this.isTextNum = true;
        }else{
            this.isTextNum = false;
        }

        console.log(this.textNum);

        this.bg1.setBitmapByName("p"+this.textNum);
        this.bg1.touchEnabled = true;
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);

    }

    private touchHandle1(){
        console.log("touch");
        Global.dispatchEvent(DataEvent.STOP,this);

        if(this.isTextNum == true){
            //alert("点中");
            if(this.contains(this.result1)==false){
                this.addChild(this.result1);
            }
            //this.setHorizontalCenter(this.result1);
            //this.setVerticalCenter(this.result1);
            this.result1.touchEnabled = true;

            Global.dispatchEvent(DataEvent.SHOWTIME,this);
            this.addChild(this.showTimer2);
            ConfigModel.timeTxt = this.showTimer2.text;
        }else if(this.isTextNum == false){
            this.setResetBut();
        }
    }

    private isTouchHandle(){
            if(this.isTouch == false) {
                //alert("touch!");//TODO
                this.connectData();
            }
    }

    private connectData(){
        this.result1.touchEnabled = false;
        this.isTouch = true;
        ConfigModel.getInstance().onConnectHandle2();
        egret.Tween.get(this.result1).to({scaleX:0.7,scaleY:0.7},600,egret.Ease.backInOut).to({scaleX:1,scaleY:1},600,egret.Ease.backInOut);
        Global.addEventListener(DataEvent.LOADCOMP,function(){
            egret.setTimeout(this.addDataListen,this,1000);
        },this);

    }

    private addDataListen(){
            this.lotteryPage.setLResult();
            this.addChild(this.lotteryPage);
            this.setHorizontalCenter(this.lotteryPage);
            this.setVerticalCenter(this.lotteryPage);
        if(this.contains(this.result1)==true){
            this.removeChild(this.result1);
        }
    }

    private resetBut:BitmapDisplay;
    private setResetBut(){
        this.addChild(this.resetBut);
        this.resetBut.touchEnabled = true;
    }


    private removeRemoveBut(){
        this.removeChild(this.resetBut);
        this.countdown = 2;
        this.bg1.setBitmapByName("pa1"+this.countdown);
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
        this.bg1.touchEnabled = false;

        this.is_Reset = true;
        this.stop = false;

        Global.dispatchEvent(DataEvent.TIMERESET,this);
    }

    private is_Reset:boolean = false;
    private reset(){
        this.timeOut3.reset();
        this.timeOut3.start();
    }

    private removeRetry(){
        //this.addChild(this.bg1);
        if(this.contains(this.retryBut)==true) {
            this.removeChild(this.retryBut);
        }

        if(this.contains(this.retryBut)==false){
            this.countdown = 3;
            this.bg1.setBitmapByName("pa1"+this.countdown);
            this.bg1.touchEnabled = false;

            this.is_Reset = true;
            this.stop = false;
            this.isTouch = false;
            if(this.contains(this.result1)==true){
                this.removeChild(this.result1);
            }

            this.retry();
            Global.dispatchEvent(DataEvent.TIMERESET,this);
            Global.dispatchEvent(DataEvent.RETRYTIME,this);
        }
    }

    private retry(){
        this.timeOut3.reset();
        this.timeOut3.start();
    }
    //
    //private retryTimeout:egret.Timer;
    //private retryBut1(){
    //    this.retryTimeout = new egret.Timer(300,2);
    //    this.retryTimeout.addEventListener(egret.TimerEvent.TIMER,this.removeRetry,this);
    //    this.retryTimeout.start();
    //}
    private noPrizeRetry(){
        if(this.isTouch == true){
            this.addChild(this.retryBut);
            this.removeChild(this.lotteryPage);
        }
    }

    private longTouchTime(){
        this.timeOut2 = new egret.Timer(100,-1);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER,this.longTouch,this);
        this.timeOut2.start();
    }

    private touchNum:number = 0;
    private longTouch(){
        this.touchNum++;
        if(this.touchNum=5){
            this.touchHandle1();
            this.textNum = 0;
            this.timeOut2.stop();
        }
    }
}