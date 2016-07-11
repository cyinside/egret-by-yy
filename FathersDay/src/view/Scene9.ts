/**
 * Created by Administrator on 2016/6/16.
 */
class Scene9 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private txt:BitmapDisplay;
    private forward:ForWardView;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p9");
        this.group.addChild(this.bg1);

        this.txt = new BitmapDisplay("9");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 150;
        this.txt.alpha =0;
        this.group.addChild(this.txt);

        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 920;
        this.group.addChild(this.forward);

        this.setFullScreen();
        this.setViewRect();
        this.addTransformation(1,this.sceneTw,this);
    }

    public twInt(){
        this.alpha =0;
        this.y =0;
        this.txt.alpha =0;
        egret.Tween.get(this).to({alpha:1},400).wait(300).call(function(){
            this.txt.alpha =0;
            egret.Tween.get(this.txt).to({alpha:1},1000);});
    }

    private sceneTw(num:number){
        switch (num){
            case -1:
                egret.Tween.get(this).to({y:-this.height,alpha:0},500,egret.Ease.sineIn).call(this.changePage,this);
                break;
            case 1:
                egret.Tween.get(this).to({y:this.height,alpha:0},500,egret.Ease.sineIn).call(this.changePage1,this);
                break;
        }
    }

    public changePage(){
        SceneUtil.changeScene(10);
    }
    public changePage1(){
        SceneUtil.changeScene(8);
    }
}