/**
 * Created by cyy on 16/5/30.
 */
class LoadingView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private loadingBg:BitmapDisplay;
    private mouse:BitmapDisplay;
    private loadingtxt:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.loadingBg =new BitmapDisplay("loadingBg");
        this.addChild(this.loadingBg);

        this.mouse  = new BitmapDisplay("mouse");
        this.mouse.y = 360;
        this.setHorizontalCenter(this.mouse);
        this.addChild(this.mouse);

        this.loadingtxt  = new BitmapDisplay("loadingtxt");
        this.loadingtxt.y = 560;
        this.setHorizontalCenter(this.loadingtxt);
        this.addChild(this.loadingtxt);

        egret.Tween.get(this.loadingtxt,{loop:true}).to({alpha:0},600).to({alpha:1},600);
        this.setFullScreen();
    }
}
