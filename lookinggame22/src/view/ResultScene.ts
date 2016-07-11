/**
 * Created by cyy on 16/3/4.
 */
class ResultScene extends DisplayScene {
    public constructor() {
        super();
        this.createScene();
    }

    private result:BitmapDisplay;
    private infoBut:BitmapDisplay;
    private createScene(){
        this.result = new BitmapDisplay("result1");
        this.addChild(this.result);
        //
        //this.infoBut = new BitmapDisplay("infoBut");
        //this.addChild(this.infoBut);
        //this.setHorizontalCenter(this.infoBut);
        //this.infoBut.y = 800;
        //this.infoBut.touchEnabled = true;
        //this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showInfo,this);
    }

    private showInfo(){
        //window.location.href="../../index2.html";
        //Global.dispatchEvent(DataEvent.SHOWINFO,this);
        Global.dispatchEvent(DataEvent.HIDETIME,this);
    }
}
