/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private startBut:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg1");
        this.addChildByScroller(this.bg1);

        this.startBut = new BitmapDisplay("startbut");
        this.startBut.y = 700;
        this.setHorizontalCenter(this.startBut);
        this.addChildByScroller(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.setFullScreen();
        this.setViewRect();
        egret.Tween.get(this.startBut,{loop:true}).to({alpha:0},1200,egret.Ease.sineIn).to({alpha:1},600,egret.Ease.sineIn).wait(500);
    }

    private touchHandle(){
        Global.dispatchEvent(DataEvent.REMOVESCENE1,this);
    }
}