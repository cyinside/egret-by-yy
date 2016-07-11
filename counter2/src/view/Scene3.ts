/**
 * Created by cyy on 15/11/13.
 */
class Scene3 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.createScnen();
    }

    private p1:UIBitmapDisplay;
    private p2:UIBitmapDisplay;
    private beginX:number =0;
    private beginY:number=0;
    private endX:number =0;
    private endY:number=0;
    private num:number = 5;
    private maxPageNum:number = 7;
    private down:ForWardView;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.p1 = new UIBitmapDisplay;
        this.p1.setBitmapByName("p5");
        this.addChild(this.p1);

        this.p2 = new UIBitmapDisplay;
        this.p2.y = this.height;
        this.addChild(this.p2);

        this.p1.touchEnabled = true;
        this.p2.touchEnabled = true;

        this.down = new ForWardView;
        this.down.x=500;
        this.down.y = this.height-this.down.height-60;
        this.addChild(this.down);

        this.p1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
        this.p1.addEventListener(egret.TouchEvent.TOUCH_END,this.touchend,this);
        this.p2.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
        this.p2.addEventListener(egret.TouchEvent.TOUCH_END,this.touchend,this);

        this.setViewRect();
        this.setFullScreen();
    }

    private touchBegin(e:egret.TouchEvent){
        this.beginX = e.stageX;
        this.beginY = e.stageY;
    }

    private touchend(e:egret.TouchEvent){
        this.endX = e.stageX;
        this.endY = e.stageY;

        this.touchHandle(this.beginX,this.beginY,this.endX,this.endY);
    }

    private touchHandle(beginX:number =0,beginY:number = 0,endX:number = 0,endY:number = 0){
        this.touchControl();
        if(endY-beginY<-50){
            this.num++;
            //this.up.alpha=1;
            if(this.num>this.maxPageNum){
                this.gotoUrl();
            }
            this.twHandle(1,this.num);
        }else if(endY-beginY>50){
            this.num--;
            if(this.num<5){
                this.num=5;
                return;
            }
            //
            //if(this.num==1){
            //    //this.up.alpha=0;
            //}
            this.twHandle(2,this.num);
        }
    }

    private touchControl(){
        this.p1.touchEnabled = this.p2.touchEnabled = false;
        egret.setTimeout(function(){this.p1.touchEnabled = this.p2.touchEnabled = true;},this,900);
    }

    private twHandle(type:number=0,num:number=0){
        if(type==1){
            if(this.p1.y == 0){
                this.p2.y =this.height;
                //this.p2.alpha = 0;
                this.p2.setBitmapByName("p"+num);
                egret.Tween.get(this.p1).to({y:-this.p1.height,alpha:0},800,egret.Ease.cubicInOut);
                egret.Tween.get(this.p2).to({y:0,alpha:1},800,egret.Ease.cubicInOut);
            }else if(this.p2.y == 0){
                this.p1.y =this.height;
                //this.p1.alpha = 0;
                this.p1.setBitmapByName("p"+num);
                egret.Tween.get(this.p2).to({y:-this.p1.height,alpha:0},800,egret.Ease.cubicInOut);
                egret.Tween.get(this.p1).to({y:0,alpha:1},800,egret.Ease.cubicInOut);
            }
        }else if(type==2){
            if(this.p1.y == 0){
                this.p2.y = -this.p2.height;
                //this.p2.alpha = 0;
                this.p2.setBitmapByName("p"+num);
                egret.Tween.get(this.p1).to({y:this.p1.height,alpha:0},800,egret.Ease.cubicInOut);
                egret.Tween.get(this.p2).to({y:0,alpha:1},800,egret.Ease.cubicInOut);
            }else if(this.p2.y == 0){
                this.p1.y = -this.p1.height;
                //this.p1.alpha = 0;
                this.p1.setBitmapByName("p"+num);
                egret.Tween.get(this.p2).to({y:this.p1.height,alpha:0},800,egret.Ease.cubicInOut);
                egret.Tween.get(this.p1).to({y:0,alpha:1},800,egret.Ease.cubicInOut);
            }
        }
    }

    private gotoUrl(){
        window.location.href = ConfigModel.getInstance().url;
    }

}