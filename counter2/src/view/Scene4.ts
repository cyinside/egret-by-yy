/**
 * Created by cyy on 16/4/27.
 */
class Scene4 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.createScnen();
    }

    private bg:UIBitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg = new UIBitmapDisplay("p8");
        this.addChild(this.bg);

        this.setViewRect();
        this.setFullScreen();
    }
}
