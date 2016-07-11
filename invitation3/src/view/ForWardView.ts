/**
 * Created by cyy on 16/4/10.
 */
class ForWardView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private forWard:BitmapDisplay;
    private createScnen() {
        this.forWard = new BitmapDisplay("forward");
        this.addChild(this.forWard);

        egret.Tween.get(this.forWard,{loop:true}).to({y:-15},800,egret.Ease.cubicInOut).to({y:0},800,egret.Ease.cubicInOut);
    }
}