/**
 * Created by cyy on 15/11/24.
 */
class Role extends DisplayScene {

    private ets:BitmapDisplay;
    private boom:BitmapDisplay;
    public constructor() {
        super();
        var id:number = Math.floor(Math.random()*6+1);
        this.ets = new BitmapDisplay;
        //var id:number = 1;
        this.ets = new BitmapDisplay();
        this.ets.setBitmapByName("ets" + id.toString());
        this.ets.scaleX = this.ets.scaleY = 0.8;
        this.ets.touchEnabled = true;
        this.addChild(this.ets);

        this.boom = new BitmapDisplay;
        this.boom.setBitmapByName("boom");
    }

    public showBoom(){
        this.addChild(this.boom);
        egret.Tween.removeTweens(this.ets);
    }

    public hideBoom(){
        this.removeChild(this.boom);
    }


}