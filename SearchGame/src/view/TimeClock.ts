/**
 * Created by cyy on 16/6/12.
 */
class TimeClock extends DisplayScene{
    public constructor() {
        super();
        this.createScene();
    }

    private nav:BitmapDisplay;
    private navBg:BitmapDisplay;
    private mask1:BitmapDisplay;
    private clock:BitmapDisplay;
    private createScene(){
        this.navBg = new BitmapDisplay("navbg");
        this.addChild(this.navBg);

        this.nav = new BitmapDisplay("nav");
        this.nav.y = 8;
        this.nav.x = -this.nav.width-1;
        this.addChild(this.nav);

        this.mask1 = new BitmapDisplay("nav");
        this.mask1.y = 8;
        this.mask1.x = 9;
        this.addChild(this.mask1);
        this.nav.mask = this.mask1;
        this.startClock();

        this.clock = new BitmapDisplay("clock");
        this.clock.x = -55;
        this.clock.y = 15;
        GameSeting.getInstance().setCenter(this.clock,0);
        this.addChild(this.clock);
    }

    public startClock(){
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }
    public stopClock(){
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    private timenum:number=0;
    private num:number=0;
    private onEnterFrameHandler(){
        this.nav.x +=this.nav.width/3600;

        this.num++;
        if(this.num>30){
            this.num=0;
            this.timenum++;
            if(this.timenum>100){
                this.clockTw();
            }
            if(this.timenum>120){
                Global.dispatchEvent(DataEvent.GAMEOVER,this);
            }
        }
    }

    public resetTime(){
        this.nav.x = -this.nav.width-1;
        this.num=0;
        this.timenum = 0;

        this.startClock();
    }

    public cutTime(){
        this.timenum+=3;
        console.log(this.timenum);
        this.nav.x+=90*(this.nav.width/3600);
    }

    private clockTw(){
        egret.Tween.get(this.clock).to({scaleX:1.2,scaleY:1.2},300).to({rotation:10},100).to({rotation:-10},100).to({rotation:10},100).to({rotation:0},100)
            .to({scaleX:1,scaleY:1},300);
    }
}