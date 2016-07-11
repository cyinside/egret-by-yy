class StageUtil{

    public static STAGE_WIDTH:number;
    public static STAGE_HEIGHT:number;

    public static init(stage:egret.Stage):void{
        StageUtil.STAGE_WIDTH = stage.stageWidth;
        StageUtil.STAGE_HEIGHT = stage.stageHeight;
    }

    public static setHorizontalCenter(display:egret.DisplayObject):egret.Point{
        display.x = (StageUtil.STAGE_WIDTH - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x,display.y);
    }

    public static setVerticalCenter(display:egret.DisplayObject):egret.Point{
        display.y = (StageUtil.STAGE_HEIGHT - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x,display.y);
    }

}