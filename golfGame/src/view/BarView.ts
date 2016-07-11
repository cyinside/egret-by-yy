/**
 * Created by Administrator on 2016/7/7.
 */
class BarView extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.createScnen();
    }

    private bar:BitmapDisplay;
    private sign:BitmapDisplay;
    private createScnen() {
        this.bar = new BitmapDisplay("bar");
        this.addChild(this.bar);

        this.sign = new BitmapDisplay("sign");
        this.sign.y = 660;
        this.sign.x = 20;
        this.sign.anchorOffsetY = this.sign.height/2;
        this.addChild(this.sign);
    }

    private num:number =-1;
    private speed:number =15;
    public moveHandle(){
        if(this.sign.y<70){
            this.num =1;
        }else if(this.sign.y>650){
            this.num =-1;
        }
        this.sign.y += this.speed*this.num;
    }

    public startMove(){
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }
    public stopMove(){
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
        if(this.sign.y>103&&this.sign.y<120){
            var event:DataEvent = new DataEvent(DataEvent.IS_RESULT);
            event.is_bingo=true;
            Global.dispatchEvent(DataEvent.IS_RESULT, event);
        }else{
            var event:DataEvent = new DataEvent(DataEvent.IS_RESULT);
            event.is_bingo=false;
            Global.dispatchEvent(DataEvent.IS_RESULT, event);
        }
    }

    private onEnterFrameHandler(){
        this.moveHandle();
    }

    public resetBar(){
        this.sign.y = 660;
    }
}