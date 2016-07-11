/**
 * Created by Administrator on 2016/6/17.
 */
class AwordPage1 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private awordPage1:AwordPage;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.awordPage1 = new AwordPage;
        this.group.addChild(this.awordPage1);
        this.awordPage1.setPage(1);

        this.setFullScreen();
        this.setViewRect();
    }
}