/**
 * Created by cyy on 16/4/9.
 */
class ButtonView extends DisplayScene {

    public constructor(num:number) {
        super();
        this.createScnen(num);
    }

    private butBg:BitmapDisplay;
    private createScnen(num:number) {
        this.butBg = new BitmapDisplay("but"+num.toString());
        this.butBg.touchEnabled = true;
        this.addChild(this.butBg);
    }
}