/**
 * Created by cyy on 16/3/5.
 */
class TimeClock extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private secondTXT:egret.TextField;
    private msecondTXT:egret.TextField;
    private nsecondTXT:egret.TextField;
    private secondTimeClock:egret.Timer;
    private msecondTimeClock:egret.Timer;
    private nsecondTimeClock:egret.Timer;
    private clockBg:BitmapDisplay;
    private createScnen(){
        this.clockBg  = new BitmapDisplay("clock");
        this.addChild(this.clockBg);
        this.clockBg.scaleX = this.clockBg.scaleY = 0.8;

        var textSize:number = 30;
        this.secondTXT = new egret.TextField;
        this.secondTXT.size = textSize;
        this.secondTXT.textColor = 0x000000;
        this.secondTXT.text = "0.";
        this.secondTXT.x = 80;
        this.secondTXT.y = 25;
        this.addChild(this.secondTXT);

        this.msecondTXT = new egret.TextField;
        this.msecondTXT.size = textSize;
        this.msecondTXT.textColor = 0x000000;
        this.msecondTXT.text = "0";
        this.msecondTXT.x = this.secondTXT.x+this.secondTXT.width+5;
        this.msecondTXT.y = this.secondTXT.y ;
        this.addChild(this.msecondTXT);

        this.nsecondTXT = new egret.TextField;
        this.nsecondTXT.size = textSize;
        this.nsecondTXT.textColor = 0x000000;
        this.nsecondTXT.text = "0";
        this.nsecondTXT.x = this.msecondTXT.x + this.msecondTXT.width + 5;
        this.nsecondTXT.y = this.secondTXT.y ;
        this.addChild(this.nsecondTXT);

        this.secondTimeClock = new egret.Timer(1000,-1);
        this.secondTimeClock.addEventListener(egret.TimerEvent.TIMER,this.setsecondTimeClock,this);

        this.msecondTimeClock = new egret.Timer(100,-1);
        this.msecondTimeClock.addEventListener(egret.TimerEvent.TIMER,this.setMssecondTimeClock,this);

        this.nsecondTimeClock = new egret.Timer(10,-1);
        this.nsecondTimeClock.addEventListener(egret.TimerEvent.TIMER,this.setNssecondTimeClock,this);


        Global.addEventListener(DataEvent.TIMESTOP,this.timeStop,this);
        Global.addEventListener(DataEvent.TIMERESET,this.timeReset,this);

        this.startTimeOut();
    }



    private secondNum:number=0;
    private msecondNum:number=0;
    private nsecondNum:number=0;

    private setNssecondTimeClock() {
        this.nsecondNum++;
        if(this.nsecondNum>9){
            this.nsecondNum = 0;
        }

        this.nsecondTXT.text = this.nsecondNum.toString();
        this.nsecondTXT.x = this.msecondTXT.x + this.msecondTXT.width + 5;
        this.nsecondTXT.y = this.secondTXT.y ;
    }

    private setMssecondTimeClock(){
        this.msecondNum++;
        if(this.msecondNum>9){
            this.msecondNum = 0;
        }

        this.msecondTXT.text = this.msecondNum.toString();
        this.msecondTXT.x = this.secondTXT.x+this.secondTXT.width+5;
        this.msecondTXT.y = this.secondTXT.y ;
    }

    private setsecondTimeClock(){
        this.secondNum++;

        this.secondTXT.text = this.secondNum.toString()+".";
    }

    private startTimeOut(){
        egret.setTimeout(this.timeStart,this,4000);
    }

    private startTimeOut1(){
        egret.setTimeout(this.timeStart,this,3000);
    }

    public timeStart(){
        this.secondTimeClock.start();
        this.msecondTimeClock.start();
        this.nsecondTimeClock.start();
    }

    private secondNum1:number=0;
    private msecondNum1:number=0;
    private nsecondNum1:number=0;
    public timeStop(){
        this.secondTimeClock.stop();
        this.msecondTimeClock.stop();
        this.nsecondTimeClock.stop();

        this.secondNum1 = this.secondNum;
        this.msecondNum1 = this.msecondNum;
        this.nsecondNum1 = this.nsecondNum;
    }

    public timeResult:string;
    public returTime(){
        this.timeResult = this.secondNum1.toString()+"."+this.msecondNum1.toString()+this.nsecondNum1.toString();

        this.msecondTXT.x = this.secondTXT.x+this.secondTXT.width+5;
        this.nsecondTXT.x = this.msecondTXT.x + this.msecondTXT.width + 5;
    }

    private timeReset(){
        this.secondNum = 0;
        this.msecondNum = 0;
        this.nsecondNum = 0;

        this.secondTXT.text = "0.";
        this.msecondTXT.text = "0";
        this.nsecondTXT.text = "0";
        this.startTimeOut1();
    }
}