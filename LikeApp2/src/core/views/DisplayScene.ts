/**
 * Created by kevinlam on 15/6/4.
 */
class DisplayScene extends egret.DisplayObjectContainer{
    private gestureType:number;
    private gestureCallBack:Function;
    private gestureThisObject:Function;
    private gestureDefaultTime:number = 500;

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

    //touchType 手势类型 1:滑动
    public addTransformation(gestureType:number,callBack:Function = null,thisObject: any = null):void{
        this.gestureType = gestureType;
        this.gestureCallBack = callBack;
        this.gestureThisObject = thisObject;
        var tap:any;
        switch (this.gestureType){
            case 1:
                tap = new neoges.SwipeGesture(this);
                tap.addEventListener(neoges.GestureEvent.ENDED,this.onSwipeHandler,this);
                break;
        }
    }

    private onSwipeHandler(event:neoges.GestureEvent):void {
        var target:neoges.GestureEvent = event;
        if(this.gestureCallBack && this.gestureThisObject){
            this.gestureCallBack(target.offsetY);
        }
    }
}