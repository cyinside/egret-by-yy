/**
 * Created by kevinlam on 15/6/4.
 */
class DisplayScene extends egret.DisplayObjectContainer{

    public constructor(){
        super();
    }

    public setFullScreen():void{
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth()/this.width,GameConfig.curHeight()/this.height);
    }

    public setHorizontalCenter(display:egret.DisplayObject):egret.Point{
        display.x = (this.width - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x,display.y);
    }

    public setVerticalCenter(display:egret.DisplayObject):egret.Point{
        display.y = (this.height - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x,display.y);
    }
}