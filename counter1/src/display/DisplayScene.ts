/**
 * Created by kevinlam on 15/6/4.
 */
class DisplayScene extends egret.DisplayObjectContainer{

    public constructor(){
        super();
    }

    public setFullScreen():void{
        this.scaleX = this.scaleY = Math.max(StageUtil.STAGE_WIDTH/this.width,StageUtil.STAGE_HEIGHT/this.height);
    }

    public setHorizontalCenter(display:egret.DisplayObject):egret.Point{
        display.x = (this.width - display.width) * 0.5;
        return new egret.Point(display.x,display.y);
    }

    public setVerticalCenter(display:egret.DisplayObject):egret.Point{
        display.y = (this.height - display.height) * 0.5;
        return new egret.Point(display.x,display.y);
    }
}