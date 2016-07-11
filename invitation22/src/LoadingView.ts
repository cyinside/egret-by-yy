/**
 * Created by cyy on 16/4/1.
 */
class LoadingView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg:BitmapDisplay;
    private color1:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        var url11:string = "resource/assets/loadingbg.png";
        var url22:string = "resource/assets/color.jpg";

        this.color1 = new BitmapDisplay;
        this.color1.load(url22);
        this.color1.y = 280;

        this.bg = new BitmapDisplay;
        this.bg.load(url11);

        Global.addEventListener(DataEvent.LOADRETRY,this.countNum,this);
        this.setFullScreen();
    }

    private num1:number = 0;
    private countNum(){
        this.num1++;
        console.log(this.num1);
        if(this.num1>1){
            this.tw();
            this.addChild(this.color1);
            this.addChild(this.bg);
        }
    }

    private tw(){
        egret.Tween.get(this.color1).to({y:-620},2000,egret.Ease.sineIn).call(this.tw1,this);
    }
    private tw1(){
        egret.Tween.get(this.color1).to({y:280},2000,egret.Ease.sineIn).call(this.tw,this);
    }
}