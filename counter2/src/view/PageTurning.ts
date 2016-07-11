/**
 * Created by cyy on 16/4/26.
 */
class PageTurning extends DisplayScrollerScene{
    public constructor(p1:UIBitmapDisplay,p2:UIBitmapDisplay){
        super();
        this.createScnen(p1,p2);
    }

    private p1:UIBitmapDisplay;
    private p2:UIBitmapDisplay;
    private beginX:number =0;
    private beginY:number=0;
    private endX:number =0;
    private endY:number=0;
    private num:number = 1;
    private maxPageNum:number = 4;
    private createScnen(p1:UIBitmapDisplay,p2:UIBitmapDisplay){
        this.width = 640;
        this.height = 1030;

        this.p1 = p1;
        this.p2 = p2;

        this.p1.touchEnabled = true;
        this.p2.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchend,this);
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
                //Global.dispatchEvent(DataEvent.GOTOSCENE2,this);
            }
            this.twHandle(1,this.num);
        }else if(endY-beginY>50){
            this.num--;
            if(this.num<1){
                this.num = 1;
                return;
            }

            if(this.num==1){
                //this.up.alpha=0;
            }
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

}