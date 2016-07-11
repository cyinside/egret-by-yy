/**
 * Created by cyy on 16/6/13.
 */
class StartScene extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg:BitmapDisplay;
    private startBut:BitmapDisplay;
    private resultView:ResultView;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay("startBg");
        this.group.addChild(this.bg);

        this.startBut = new BitmapDisplay("startBut");
        GameSeting.getInstance().setCenter(this.startBut,1);
        this.startBut.y = 820;
        this.group.addChild(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.resultView = new ResultView();
        //this.group.addChild(this.resultView);
        //this.setHorizontalCenter(this.resultView);
        //this.setVerticalCenter(this.resultView);

        this.setFullScreen();
        this.setViewRect();

        egret.Tween.get(this.startBut,{loop:true}).to({scaleX:1.1,scaleY:1.1},500).to({rotation:10},150).to({rotation:-10},150).to({rotation:10},150).to({rotation:0},150)
            .to({scaleX:1,scaleY:1},300).wait(800);

        //var p = this.bg.texture.getPixel32(100,100);
        //var color = (p[0]<<16) + (p[1]<<8) + p[2];
        //console.log(color.toString(16));
    }

    private touchHandle(){
        egret.Tween.removeTweens(this.startBut);
        this.resultView.setScene(1);
        this.group.addChild(this.resultView);
        this.setHorizontalCenter(this.resultView);
        this.setVerticalCenter(this.resultView);
    }

}