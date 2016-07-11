/**
 * Created by Administrator on 2016/6/17.
 */
/**
 * Created by cyy on 16/5/26.
 */
class AwordPage extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg:BitmapDisplay;
    private but:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay();
        this.addChild(this.bg);

        this.but = new BitmapDisplay("playBut");
        this.setHorizontalCenter(this.but);
        this.but.touchEnabled = true;
        this.but.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        this.but.y = 800;

        //this.setFullScreen();
    }

    public setPage(num:number){
        switch (num){
            case 0:
                this.bg.setBitmapByName("no");
                this.addChild(this.but);
                break;
            case 1:
                this.bg.setBitmapByName("yes");
                break;
        }
    }

    private startGame(){
        SceneUtil.changeScene(2);
    }
}
