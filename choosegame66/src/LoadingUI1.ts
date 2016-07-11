/**
 * Created by cyy on 15/12/15.
 */
class LoadingUI1 extends DisplayScene {

    public constructor() {
        super();
        this.width = 640;
        this.height = 1030;
        this.createView();
    }

    private percentTXT:egret.TextField;
    private percentTXT2:egret.TextField;
    private rect1:egret.Shape;
    private rect2:egret.Shape;
    private mask1:egret.Rectangle;
    private createView():void{
        this.width = 640;
        this.height = 1030;

        this.rect2 = new egret.Shape;
        this.rect2.graphics.beginFill(0Xf2eada);
        this.rect2.graphics.drawRect(0,0,640,1030);
        this.rect2.graphics.endFill();
        //this.addChild(this.rect2);
        //
        //this.rect1 = new egret.Shape;
        //this.rect1.graphics.beginFill(0X50b7c1);
        //this.rect1.graphics.drawRect(0,1030,640,1030);
        //this.rect1.graphics.endFill();
        //this.addChild(this.rect1);

        this.percentTXT2 = new egret.TextField();
        this.percentTXT2.text = "0%";
        this.percentTXT2.bold = true;
        this.percentTXT2.textColor = 0x50b7c1;
        this.percentTXT2.stroke = 5;
        this.percentTXT2.strokeColor = 0xffc20e;
        this.percentTXT2.size = 120;
        this.percentTXT2.x = this.width/2;
        this.percentTXT2.y = this.height/2;
        this.percentTXT2.textAlign = egret.HorizontalAlign.CENTER;
        this.percentTXT2.anchorOffsetX = this.percentTXT2.width/2;
        this.percentTXT2.anchorOffsetY = this.percentTXT2.height/2;
        this.addChild(this.percentTXT2);


        this.percentTXT = new egret.TextField();
        this.percentTXT.text = "0%";
        this.percentTXT.bold = true;
        this.percentTXT.textColor = 0Xd3d7d4;
        this.percentTXT.size = 120;
        this.percentTXT.x = this.width/2;
        this.percentTXT.y = this.height/2;
        this.percentTXT.textAlign = egret.HorizontalAlign.CENTER;
        this.percentTXT.anchorOffsetX = this.percentTXT.width/2;
        this.percentTXT.anchorOffsetY = this.percentTXT.height/2;

        this.addChild(this.percentTXT);

        this.mask1 = new egret.Rectangle(0,this.percentTXT.height,this.width,150);
        console.log(this.percentTXT.y);
        this.percentTXT.mask = this.mask1;

        this.setFullScreen();
    }

    public setProgress(current, total):void {
        //显示进度
        //this.textField.text = "Loading..." + current + "/" + total;
        var per:number = current/total;//加载的比例
        var per1:number = current/total*100;//加载的比例
        this.mask1.y = this.percentTXT.height - 150*per;
        //this.testrect.y = this.testrect.y - 150*per;

        this.percentTXT.text = per1.toFixed(0)+"%";
        this.percentTXT2.text = per1.toFixed(0)+"%";

        this.percentTXT2.anchorOffsetX = this.percentTXT2.width/2;
        this.percentTXT2.anchorOffsetY = this.percentTXT2.height/2;
        this.percentTXT.anchorOffsetX = this.percentTXT.width/2;
        this.percentTXT.anchorOffsetY = this.percentTXT.height/2;
        this.percentTXT2.x = this.width/2;
        this.percentTXT2.y = this.height/2;
        this.percentTXT.x = this.width/2;
        this.percentTXT.y = this.height/2;
    }

}