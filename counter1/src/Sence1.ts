/**
 * Created by cyy on 15/10/13.
 */
class Sence1 extends DisplayScene{
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.createGameScene();
        this.tw();
    }

    private bg1:BitmapDisplay;
    private gobtn:BitmapDisplay;
    private txt1:BitmapDisplay;
    private createGameScene():void{
        this.width = 640;
        this.height = 1030;

        this.bg1 = new BitmapDisplay();
        this.bg1.setBitmapByName("bg1");
        this.setHorizontalCenter(this.bg1);
        this.setVerticalCenter(this.bg1);
        this.addChild(this.bg1);

        this.gobtn = new BitmapDisplay();
        this.gobtn.setBitmapByName("txt2");
        this.setHorizontalCenter(this.gobtn);
        this.gobtn.y  = 920;
        this.gobtn.touchEnabled = true;
        this.addChild(this.gobtn);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goSence2,this);

        this.txt1 = new BitmapDisplay();
        this.txt1.setBitmapByName("txt1");
        this.txt1.y = -this.txt1.height;
        this.setHorizontalCenter(this.txt1);
        this.addChild(this.txt1);

        this.setFullScreen();
    }

    private tw(){
        egret.Tween.get(this.txt1).to({y:50},800,egret.Ease.backInOut);
    }

    private goSence2(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE2);
        this.dispatchEvent(dataEvent);
    }

    }