/**
 * Created by cyy on 16/1/17.
 */
class Jztween extends DisplayScene {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(){
        this.createScnen();
    }

    private bg2:BitmapDisplay;
    private jzUP:BitmapDisplay;
    private jzDOWN:BitmapDisplay;
    private rect:egret.Shape;
    private rect1:egret.Shape;
    private jz1:BitmapDisplay;
    private close:BitmapDisplay;
    private logo:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;
        var url6:string="resource/assets/loading/logo.png";

        this.bg2 = new BitmapDisplay;
        this.bg2.setBitmapByName("bg2");
        this.bg2.y = 30;
        this.bg2.x = 50;
        this.addChild(this.bg2);

        this.jzUP = new BitmapDisplay;
        this.jzUP.setBitmapByName("jzup");
        this.jzUP.x = 15;
        this.addChild(this.jzUP);

        this.jzDOWN = new BitmapDisplay;
        this.jzDOWN.setBitmapByName("jzdown");
        this.jzDOWN.y = this.bg2.height;
        this.jzDOWN.x = 15;
        this.addChild(this.jzDOWN);

        this.logo = new BitmapDisplay;
        this.logo.load(url6);
        this.logo.x = 270;
        this.logo.y = 100;
        this.addChild(this.logo);
        this.logo.alpha = 1;

        this.close = new BitmapDisplay;
        this.close.setBitmapByName("open");
        this.close.scaleX = 0;
        this.close.scaleY = 0;
        this.close.anchorOffsetX = 310;
        this.close.anchorOffsetY = 360;
        this.close.x = this.width/2;
        this.close.y = this.height/2;
        this.close.alpha = 1;
        this.close.rotation = -120;
        this.addChild(this.close);

        this.rect = new egret.Shape;
        this.rect.graphics.beginFill(0xFFFFFF,1);
        this.rect.graphics.drawRect(0,this.bg2.y,this.width,this.bg2.height);
        this.rect.graphics.endFill();
        this.addChild(this.rect);

        this.rect1 = new egret.Shape;
        this.rect1.graphics.beginFill(0xFFFFFF,1);
        this.rect1.graphics.drawRect(80,this.bg2.y+35,481,813);
        this.rect1.graphics.endFill();
        //this.rect1.anchorOffsetY = 826;
        this.addChild(this.rect1);

        this.jz1 = new BitmapDisplay;
        this.jz1.setBitmapByName("jz1");
        this.jz1.y = this.jzDOWN.y-30;
        this.jz1.x = 230;
        this.jz1.alpha = 0;
        this.jz1.touchEnabled = true;
        this.addChild(this.jz1);
        this.jz1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoS2,this);

        this.bg2.mask = this.rect;
        this.close.mask = this.rect1;
        egret.setTimeout(this.tw0,this,1000);
        //egret.setTimeout(this.tw1,this,1000);

    }

    private tw0(){
        egret.Tween.get(this.close).to({scaleX:1.8,scaleY:1.8,rotation:1},1800,egret.Ease.backOut).wait(800).call(this.mtw1,this);
    }

    private mtw1(){
        this.close.setBitmapByName("close");
        egret.setTimeout(this.mtw2,this,400);
    }

    private mtw2(){
        this.close.setBitmapByName("open");
        egret.setTimeout(this.mtw3,this,400);
    }

    private mtw3(){
        this.close.setBitmapByName("close");
        egret.setTimeout(this.mtw4,this,400);
    }
    private mtw4(){
        this.close.setBitmapByName("open");
        egret.setTimeout(this.tw02,this,1000);
    }

    private tw02(){
        this.logo.alpha = 0;
        this.bg2.setBitmapByName("bg21");
        egret.Tween.get(this.close).to({scaleX:0,scaleY:0,rotation:-120},1800,egret.Ease.backIn).call(this.tw,this).call(this.tw1,this);
    }

    private tw(){
        egret.Tween.get(this.rect).to({y:this.jzDOWN.y},3000,egret.Ease.sineIn);
        //egret.Tween.get(this.rect1).to({scaleY:0},3000,egret.Ease.sineIn);
    }

    private tw1(){
        egret.Tween.get(this.jzUP).to({y:this.jzDOWN.y-23},3000,egret.Ease.sineIn).call(this.tw2,this);
    }

    private tw2(){
        egret.Tween.get(this.jz1).to({alpha:1},1000,egret.Ease.sineIn).call(this.twCom,this);
    }

    private twCom(){
        var dataEvent:DataEvent = new DataEvent(DataEvent.jzComple);
        this.dispatchEvent(dataEvent);
    }

    private gotoS2(){
        console.log(2222);
        var dataEvent:DataEvent = new DataEvent(DataEvent.GotoScene2);
        this.dispatchEvent(dataEvent);
    }
}
