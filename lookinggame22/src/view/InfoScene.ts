/**
 * Created by cyy on 16/3/4.
 */
class InfoScene extends DisplayScene {
    public constructor() {
        super();
        this.createScene();
    }


    private info:BitmapDisplay;
    private createScene(){
        //this.width = 640;
        //this.height = 1030;

        this.info = new BitmapDisplay("info");
        this.addChild(this.info);

    }
}