/**
 * Created by Administrator on 2015/8/11.
 */
/*
 * lixin // [url=mailto:297145207@qq.com]297145207@qq.com[/url]
 *           2015.02.20
 *           @��ק
 * */

class Drag extends DisplayScene {
    private dragObject:egret.DisplayObject;
    private offsetX:number = 0;
    private offsetY:number = 0;
    private bX:number = 0;
    private bY:number = 0;


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.width = 640;
        this.height = 1030;
    }

    private onAddToStage(event:egret.Event) {

    }

    /*
     * ��ʼ��ק
     * @param _dragObject ��ק����
     * @param offsetX     X��ƫ��
     * @param offsetY     Y��ƫ��
     * */
    public start(_dragObject:egret.DisplayObject, offsetX:number = 0,offsetY:number = 0) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        //
        this.dragObject = _dragObject;
        this.dragObject.touchEnabled = true;
        this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
    }

    private onTouchEend(e:egret.TouchEvent) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    }


    private onTouchBegin(e:egret.TouchEvent) {
        this.bX = e.stageX - this.dragObject.x;
        this.bY = e.stageY - this.dragObject.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onTouchMove(e:egret.TouchEvent) {
        if (this.dragObject) {
            this.dragObject.y = - (this.bY - e.stageY);
            if(this.dragObject.y > 0){
                this.dragObject.y = 0;
            }else if(this.dragObject.y + this.dragObject.height < this.height){
                this.dragObject.y = -(this.dragObject.height-this.height);
            }
        }
        else {
            this.stop();
        }
    }

    public stop() {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
        this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    }
}