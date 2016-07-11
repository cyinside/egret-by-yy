/**
 * Created by cyy on 16/5/19.
 */
/**
 * Created by cyy on 16/3/29.
 */
class HeadImg1 extends egret.DisplayObjectContainer {
    public constructor(num:number) {
        super();
        this.createScnen(num);
    }

    private uheadImg:BitmapDisplay;
    private mask1:BitmapDisplay;
    private createScnen(num:number){
        this.mask1 = new BitmapDisplay();
        this.mask1.setBitmapByName("mask");
        this.mask1.anchorOffsetX = this.mask1.width/2;
        this.mask1.anchorOffsetY = this.mask1.height/2;
        this.addChild(this.mask1);

        this.uheadImg = new BitmapDisplay;

        this.updateImg(num);
    }

    private updateImg(num:number){
        switch (num){
            case 1:
                this.uheadImg.load(ConfigModel.getInstance().headUrl,this.setMask,this);
                break;
            case 2:
                this.uheadImg.load(ConfigModel.getInstance().headUrl1,this.setMask,this);
                break;
        }
    }

    private setMask(){
        this.addChild(this.uheadImg);
        this.uheadImg.anchorOffsetX = this.uheadImg.width/2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height/2;
        this.uheadImg.scaleX = this.uheadImg.scaleY = 95/this.uheadImg.width;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;

        this.uheadImg.mask = this.mask1;
    }
}