/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScene{
    public constructor(){
        super();
        this.createScene();
    }

    private bg1:BitmapDisplay;
    private bg10:BitmapDisplay;
    private bg11:BitmapDisplay;
    private bg12:BitmapDisplay;
    public begininfo:BitmapDisplay;
    private luckyinfo:BitmapDisplay;
    private erorinfo:BitmapDisplay;
    private btn1:BitmapDisplay;
    private btn2:BitmapDisplay;
    private scoreimg:BitmapDisplay;
    private timeimg:BitmapDisplay;
    private vote:boolean = false;
    private num:number = 0;
    private timeTXT:egret.TextField;
    private timeTXT1:egret.TextField;
    private timeOut1:egret.Timer;
    private timeOut2:egret.Timer;
    private timeOut3:egret.Timer;
    private startTime:egret.TextField;
    private startTimeNum:number=4;
    private createScene(){
        this.width = 640;
        this.height = 1030;

        this.timeOut1 = new egret.Timer(1000,10);                                              /*****时间******/
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.timeCounter,this);
        this.timeOut1.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.gameOver,this);

        this.timeOut2 = new egret.Timer(1000,4);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER,this.starttime,this);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.removeGameTime,this);

        this.timeOut3 = new egret.Timer(1000,3);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER,this.starttime,this);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.removeGameTime,this);

        this.bg1 = new BitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
        this.addChild(this.bg1);

        this.bg10 = new BitmapDisplay;
        this.bg10.setBitmapByName("bg10");
        this.setHorizontalCenter(this.bg10);
        this.setVerticalCenter(this.bg10);
        this.addChild(this.bg10);

        this.bg11 = new BitmapDisplay;
        this.bg11.setBitmapByName("bg11");
        this.setHorizontalCenter(this.bg11);
        this.bg11.y = this.height;
        this.addChild(this.bg11);

        this.bg12 = new BitmapDisplay;
        this.bg12.setBitmapByName("bg12");
        this.setHorizontalCenter(this.bg12);
        this.bg12.y = this.height*2;
        this.addChild(this.bg12);

        this.btn1 = new BitmapDisplay;
        this.btn1.setBitmapByName("btn1");
        //this.btn1.scaleX = this.btn1.scaleY = 0.3;
        this.btn1.y = 750;
        this.btn1.x = 0;
        this.addChild(this.btn1);
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rightHandle,this);

        this.btn2 = new BitmapDisplay;
        this.btn2.setBitmapByName("btn2");
        //this.btn2.scaleX = this.btn2.scaleY = 0.3;
        this.btn2.y = 750;
        this.btn2.x = this.width-this.btn2.width;
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leftHandle,this);
        this.addChild(this.btn2);

        this.timeimg = new BitmapDisplay;
        this.timeimg.setBitmapByName("timeimg");
        this.timeimg.y = 150;
        this.timeimg.x = 50;
        this.addChild(this.timeimg);

        this.scoreimg = new BitmapDisplay;
        this.scoreimg.setBitmapByName("scoreimg");
        this.scoreimg.y = 150;
        this.scoreimg.x = 440;
        this.addChild(this.scoreimg);

        this.timeTXT = new egret.TextField;
        this.timeTXT.text = "10";
        this.timeTXT.size = 40;
        this.timeTXT.textColor = 0xf15a22;
        this.timeTXT.bold = true;
        this.timeTXT.stroke = 3;
        this.timeTXT.strokeColor = 0xFFFFFF;
        this.timeTXT.x = 142;
        this.timeTXT.y = 158;
        this.addChild(this.timeTXT);

        this.timeTXT1 = new egret.TextField;
        this.timeTXT1.text = "0";
        this.timeTXT1.size = 40;
        this.timeTXT1.textColor = 0xf15a22;
        this.timeTXT1.bold = true;
        this.timeTXT1.stroke = 3;
        this.timeTXT1.strokeColor = 0xFFFFFF;
        this.timeTXT1.x = 542;
        this.timeTXT1.y = 158;
        this.addChild(this.timeTXT1);

        this.startTime = new egret.TextField;
        this.startTime.size = 150;
        this.startTime.textColor = 0xf15a22;
        this.startTime.bold = true;
        this.startTime.stroke = 3;
        this.startTime.x = 280;
        this.startTime.y = 300;
        this.startTime.strokeColor = 0xFFFFFF;
        this.addChild(this.startTime);

        this.begininfo = new BitmapDisplay;
        this.begininfo.setBitmapByName("begininfo");
        this.setHorizontalCenter(this.begininfo);
        this.setVerticalCenter(this.begininfo);
        this.addChild(this.begininfo);
        this.begininfo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGameTime,this);

        this.luckyinfo = new BitmapDisplay;
        this.luckyinfo.setBitmapByName("luckyinfo");
        this.setHorizontalCenter(this.luckyinfo);
        this.setVerticalCenter(this.luckyinfo);
        this.luckyinfo.touchEnabled = true;
        this.luckyinfo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoScene2,this);

        this.erorinfo = new BitmapDisplay;
        this.erorinfo.setBitmapByName("erorinfo");
        this.setHorizontalCenter(this.erorinfo);
        this.setVerticalCenter(this.erorinfo);
        this.erorinfo.touchEnabled = true;
        //this.addChild(this.erorinfo);
        this.erorinfo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reload,this);

        this.setFullScreen();

        JSSDK.getWeiXinShareAppMessage(2,ConfigModel.wx_title,ConfigModel.link,
            ConfigModel.imgURL,ConfigModel.getUserName()+ConfigModel.wx_desc);
        JSSDK.getWeiXinShareTimeline(2,ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);
        console.log(ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);
    }

    private startGameTime(){
        if(this.begininfo){
            this.removeChild(this.begininfo);
        }
        this.timeOut2.start();
    }

    private removeGameTime(){
        this.removeChild(this.startTime);

        this.startGame();
    }
    private startGame(){
        this.timeOut1.start();

        this.btn1.touchEnabled = true;
        this.btn2.touchEnabled = true;
    }

    private starttime(){
        this.startTimeNum--;
        this.startTime.text = this.startTimeNum.toString();
    }

     private rightHandle(e:egret.TouchEvent){
         if(this.btn1.scaleX == 1||this.btn1.scaleY == 1){
             this.btn1.scaleX = 1.1;
             this.btn1.scaleY = 1.1;
         }else if(this.btn1.scaleX == 1.1||this.btn1.scaleY == 1.1){
             this.btn1.scaleX = 1;
             this.btn1.scaleY = 1;
         }

         //egret.Tween.get(this.btn1).to({screenX:1.3,scaleY:1.3},10).to({screenX:1,scaleY:1},10);
         if(this.vote ==false && this.num > 0){
             this.showEror();
         }else {
             this.vote = false;
             this.num++;
             console.log(this.num);
             this.moveBg();

             this.timeTXT1.text = this.num.toString();
         }
     }

     private leftHandle(){
         if(this.btn2.scaleX== 1||this.btn2.scaleY == 1){
             this.btn2.scaleX = 1.1;
             this.btn2.scaleY = 1.1;
         }else if(this.btn2.scaleX == 1.1||this.btn2.scaleY == 1.1){
             this.btn2.scaleX = 1;
             this.btn2.scaleY = 1;
         }

         if(this.vote == true){
             this.showEror();
         }else {
             this.vote = true;
             this.num++;
             console.log(this.num);
             this.moveBg();

             this.timeTXT1.text = this.num.toString();
         }
     }

    private moveBg(){
        this.bg11.y -= 50;
        this.bg12.y -= 50;

        if(this.bg11.y < - this.bg11.height){
            this.bg11.y = this.height;
        }else if(this.bg12.y < - this.bg12.height){
            this.bg12.y = this.height;
        }

    }

    private showEror(){
        this.addChild(this.erorinfo);
        this.btn1.touchEnabled = this.btn2.touchEnabled = false;
    }

    private timeNum1:number = 10;
    private timeCounter(){
        this.timeNum1--;
        this.timeTXT.text = this.timeNum1.toString();
    }

    private gameOver() {
        //alert("你的次数：" + this.num.toString());

        var ZYhudongscore:number = 2;                                         /*************次数**************/
        if(this.num>ZYhudongscore||this.num==ZYhudongscore){
            this.addChild(this.luckyinfo);
            this.btn1.touchEnabled = this.btn2.touchEnabled = false;
        }else if(this.num<ZYhudongscore){
            this.showEror();
        }
    }

    private reload(){
        this.removeChild(this.erorinfo);
         this.bg11.y = this.height;
         this.bg12.y = this.height*2;
         this.num = 0;
         this.timeTXT1.text = "0";
        this.vote = false;

         this.timeOut1.reset();
         this.timeNum1 = 10;
         this.timeTXT.text = this.timeNum1.toString();
         //this.timeOut1.start();
         //this.btn1.touchEnabled = this.btn2.touchEnabled = true;

        this.addChild(this.startTime);
        this.startTimeNum = 3;
        this.startTime.text = "3";

        this.timeOut3.reset();
        this.timeOut3.start();

    }

    private gotoScene2(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE2);
        this.dispatchEvent(dataEvent);
    }

}