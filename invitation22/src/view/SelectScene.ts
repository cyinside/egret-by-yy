/**
 * Created by cyy on 16/3/31.
 */
class SelectScene extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    public inputPage:InputPage;
    private but1:BitmapDisplay;
    private but2:BitmapDisplay;
    private but3:BitmapDisplay;
    private but4:BitmapDisplay;
    private but5:BitmapDisplay;
    private but6:BitmapDisplay;
    private but7:BitmapDisplay;
    private but8:BitmapDisplay;
    private but9:BitmapDisplay;
    private but10:BitmapDisplay;
    private but11:BitmapDisplay;
    private but12:BitmapDisplay;
    private but13:BitmapDisplay;
    private but14:BitmapDisplay;
    private selectBg:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.selectBg = new BitmapDisplay("selectBg");
        this.addChild(this.selectBg);

        this.but9 = new BitmapDisplay("but9");
        this.but9.anchorOffsetX = this.but9.width/2;
        this.but9.anchorOffsetY = this.but9.height/2;
        this.addChild(this.but9);

        this.but11 = new BitmapDisplay("but11");
        this.but11.anchorOffsetX = this.but11.width/2;
        this.but11.anchorOffsetY = this.but11.height/2;
        this.addChild(this.but11);

        this.but1 = new BitmapDisplay("but1");
        this.but1.anchorOffsetX = this.but1.width/2;
        this.but1.anchorOffsetY = this.but1.height/2;
        this.addChild(this.but1);

        this.but2 = new BitmapDisplay("but2");
        this.but2.anchorOffsetX = this.but2.width/2;
        this.but2.anchorOffsetY = this.but2.height/2;
        this.addChild(this.but2);

        this.but3 = new BitmapDisplay("but3");
        this.but3.anchorOffsetX = this.but3.width/2;
        this.but3.anchorOffsetY = this.but3.height/2;
        this.addChild(this.but3);

        this.but4 = new BitmapDisplay("but4");
        this.but4.anchorOffsetX = this.but4.width/2;
        this.but4.anchorOffsetY = this.but4.height/2;
        this.addChild(this.but4);

        this.but5 = new BitmapDisplay("but5");
        this.but5.anchorOffsetX = this.but5.width/2;
        this.but5.anchorOffsetY = this.but5.height/2;
        this.addChild(this.but5);

        this.but6 = new BitmapDisplay("but6");
        this.but6.anchorOffsetX = this.but6.width/2;
        this.but6.anchorOffsetY = this.but6.height/2;
        this.addChild(this.but6);

        this.but7 = new BitmapDisplay("but7");
        this.but7.anchorOffsetX = this.but7.width/2;
        this.but7.anchorOffsetY = this.but7.height/2;
        this.addChild(this.but7);

        this.but8 = new BitmapDisplay("but8");
        this.but8.anchorOffsetX = this.but8.width/2;
        this.but8.anchorOffsetY = this.but8.height/2;
        this.addChild(this.but8);

        this.but10 = new BitmapDisplay("but10");
        this.but10.anchorOffsetX = this.but10.width/2;
        this.but10.anchorOffsetY = this.but10.height/2;
        this.addChild(this.but10);

        this.but12 = new BitmapDisplay("but12");
        this.but12.anchorOffsetX = this.but12.width/2;
        this.but12.anchorOffsetY = this.but12.height/2;
        this.addChild(this.but12);

        this.but13 = new BitmapDisplay("but13");
        this.but13.anchorOffsetX = this.but13.width/2;
        this.but13.anchorOffsetY = this.but13.height/2;
        this.addChild(this.but13);

        this.but14 = new BitmapDisplay("but14");
        this.but14.anchorOffsetX = this.but14.width/2;
        this.but14.anchorOffsetY = this.but14.height/2;
        this.addChild(this.but14);

        this.inputPage = new InputPage;
        this.inputPage.anchorOffsetX = this.inputPage.width/2;
        this.inputPage.anchorOffsetY = this.inputPage.height/2;
        this.inputPage.scaleX = this.inputPage.scaleY = 0;
        this.inputPage.x = this.width/2;
        this.inputPage.y = this.height/2;
        this.addChild(this.inputPage);

        this.setFullScreen();
        //this.setViewRect();
        this.touchControl();
        this.setlocation();
        this.addListen();
    }

    private touchHandle(evt:egret.TouchEvent){
        this.touchControl(false);
        switch (evt.currentTarget){
            case this.but1:
                ConfigModel.getInstance().typeNum = 1;
                this.iconTw(this.but1);
                break;
            case this.but2:
                ConfigModel.getInstance().typeNum = 2;
                this.iconTw(this.but2);
                break;
            case this.but3:
                ConfigModel.getInstance().typeNum = 3;
                this.iconTw(this.but3);
                break;
            case this.but4:
                ConfigModel.getInstance().typeNum = 4;
                this.iconTw(this.but4);
                break;
            case this.but5:
                ConfigModel.getInstance().typeNum = 5;
                this.iconTw(this.but5);
                break;
            case this.but6:
                ConfigModel.getInstance().typeNum = 6;
                this.iconTw(this.but6);
                break;
            case this.but7:
                ConfigModel.getInstance().typeNum = 7;
                this.iconTw(this.but7);
                break;
            case this.but8:
                ConfigModel.getInstance().typeNum = 8;
                this.iconTw(this.but8);
                break;
            case this.but9:
                ConfigModel.getInstance().typeNum = 9;
                this.iconTw(this.but9);
                break;
            case this.but10:
                ConfigModel.getInstance().typeNum = 10;
                this.iconTw(this.but10);
                break;
            case this.but11:
                ConfigModel.getInstance().typeNum = 11;
                this.iconTw(this.but11);
                break;
            case this.but12:
                ConfigModel.getInstance().typeNum = 12;
                this.iconTw(this.but12);
                break;
            case this.but13:
                ConfigModel.getInstance().typeNum = 13;
                this.iconTw(this.but13);
                break;
            case this.but14:
                ConfigModel.getInstance().typeNum = 14;
                this.iconTw(this.but14);
                break;
        }
    }

    private setlocation(){
        var x1:number = 135;
        var x2:number = 257;
        var x3:number = 380;
        var x4:number = 510;
        var y1:number = 175;
        var y2:number = 310;
        var y3:number = 446;
        var y4:number = 580;
        var y5:number = 715;

        this.but1.x = x1;
        this.but1.y = y1;

        this.but2.x = x2;
        this.but2.y = y1;

        this.but3.x = x4;
        this.but3.y = y1;

        this.but4.x = x1;
        this.but4.y = y2;

        this.but5.x = x2;
        this.but5.y = y2;

        this.but6.x = x3;
        this.but6.y = y2;

        this.but7.x = x4;
        this.but7.y = y2;

        this.but8.x = x1;
        this.but8.y = y3;

        this.but9.x = x2;
        this.but9.y = y3;

        this.but10.x = x1;
        this.but10.y = y4;

        this.but11.x = x2;
        this.but11.y = y4;

        this.but12.x = x1;
        this.but12.y = y5;

        this.but13.x = x2;
        this.but13.y = y5;

        this.but14.x = x2;
        this.but14.y = 853;
    }
    private iconTw(obj:egret.DisplayObject){
        this.setChildIndex(obj,14);
        egret.Tween.get(obj).to({x:this.width/2,y:this.height/2},600,egret.Ease.circInOut).call(this.showInputPage,this);
        this.setlocation();
    }


    private showInputPage(){
        console.log("adhoasu")
        egret.Tween.get(this.inputPage).to({scaleX:1,scaleY:1},600,egret.Ease.backInOut);
    }

    public addListen(){

        this.but1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but11.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but12.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but13.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but14.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    public removeListen(){
        this.but1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but4.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but5.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but6.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but7.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but8.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but9.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but10.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but11.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but12.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but13.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.but14.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    public touchControl(isTouch:boolean = true){
        this.but1.touchEnabled=this.but2.touchEnabled=this.but3.touchEnabled=this.but4.touchEnabled=
            this.but5.touchEnabled=this.but6.touchEnabled=this.but7.touchEnabled=this.but8.touchEnabled=
                this.but9.touchEnabled=this.but10.touchEnabled=this.but11.touchEnabled=this.but12.touchEnabled=
                    this.but13.touchEnabled=this.but14.touchEnabled=isTouch;
    }
}