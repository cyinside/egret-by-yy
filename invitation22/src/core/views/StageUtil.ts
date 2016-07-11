class StageUtil{

    public static setHorizontalCenter(display:egret.DisplayObject):egret.Point{
        display.x = (GameConfig.curWidth() - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x,display.y);
    }

    public static setVerticalCenter(display:egret.DisplayObject):egret.Point{
        display.y = (GameConfig.curHeight() - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x,display.y);
    }

}