/**
 * Created by cyy on 16/3/5.
 */
/**
 * Created by cyy on 15/9/1.
 */
class LoadingView extends DisplayScene {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);
    }

    private onAddtoStage(event:egret.Event){
        this.createView();
    }

    private bg:BitmapDisplay;
    private quan:BitmapDisplay;
    private king:BitmapDisplay;
    private loading:egret.TextField;
    private createView():void {
        this.width = 640;
        this.height = 1030;

        var url1:string = "resource/assets/loadingbg.jpg";
        var url2:string = "resource/assets/quan.png";
        var url3:string = "resource/assets/king.png";
        this.bg = new BitmapDisplay;
        this.bg.load(url1);
        this.addChild(this.bg);

        this.quan = new BitmapDisplay;
        this.quan.load(url2);
        this.quan.anchorOffsetX = 228/2;
        this.quan.anchorOffsetY = 228/2;
        this.quan.x = 320;
        this.quan.y = 360;
        this.addChild(this.quan);

        this.king = new BitmapDisplay;
        this.king.load(url3);
        this.king.anchorOffsetX = 153/2;
        this.king.anchorOffsetY = 148/2;
        this.king.x = 320;
        this.king.y = 360;
        this.king.scaleX = this.king.scaleY=1.1;
        this.addChild(this.king);

        this.loading = new egret.TextField;
        this.loading.text = "Loading";
        this.loading.y = 500;
        this.loading.anchorOffsetX = this.loading.width/2;
        this.loading.x = this.width/2;
        this.addChild(this.loading);

        this.setFullScreen();
        this.tw();
    }

    private tw(){
        egret.Tween.get(this.quan,{loop:true}).to({scaleX:1.05,scaleY:1.05},600,egret.Ease.sineIn).to({scaleX:1,scaleY:1},600,egret.Ease.sineIn);
        egret.Tween.get(this.king,{loop:true}).to({scaleX:1,scaleY:1},600,egret.Ease.sineIn).to({scaleX:1.1,scaleY:1.1},600,egret.Ease.sineIn);
    }

}