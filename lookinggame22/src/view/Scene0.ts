/**
 * Created by cyy on 16/3/4.
 */
class Scene0 extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg0:BitmapDisplay;
    private rulepage:BitmapDisplay;
    private startBut:BitmapDisplay;
    private startBut1:BitmapDisplay;
    private blackRect:egret.Shape;
    public timeNum:number=0;
    private myMusic = document.getElementById('bgmusic1');
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg0 = new BitmapDisplay("bg0");
        this.addChild(this.bg0);

        this.startBut = new BitmapDisplay("startBut");
        this.addChild(this.startBut);
        this.setHorizontalCenter(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.y = 820;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRule,this);

        this.blackRect = new egret.Shape;
        this.blackRect.graphics.beginFill(0x000000,0.7);
        this.blackRect.graphics.drawRect(0,0,this.width,this.height);
        this.blackRect.graphics.endFill();

        this.rulepage = new BitmapDisplay("rulepage");
        this.setHorizontalCenter(this.rulepage);
        this.rulepage.y = 70;
        this.rulepage.alpha =0;
        this.addChild(this.rulepage);

        this.startBut1 = new BitmapDisplay("startBut1");
        this.setHorizontalCenter(this.startBut1);
        this.startBut1.touchEnabled = true;
        this.startBut1.y = 820;
        this.startBut1.alpha =0;
        this.startBut1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoS1,this);

        this.setFullScreen();
    }

    private gotoS1(){
        Global.dispatchEvent(DataEvent.GOTOS1,this);
    }

    private showRule(){
        this.addChild(this.startBut1);
        egret.Tween.get(this.rulepage).to({alpha:1},800,egret.Ease.sineIn);
        egret.Tween.get(this.startBut1).to({alpha:1},800,egret.Ease.sineIn);
        this.addChildAt(this.blackRect,2);

        if(this.myMusic["paused"]==true){
            this.myMusic["play"]();
        }
    }

}
