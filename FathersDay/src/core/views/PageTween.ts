/**
 * Created by Administrator on 2016/6/16.
 */
class PageTween {
    private obj:DisplayScrollerScene;
    private callFunc:Function;
    private callFunc1:Function;
    private thisFunc:Function;
    public constructor(obj:DisplayScrollerScene,callBack:Function = null,callBack1:Function = null,thisObject: any = null){
        this.obj = obj;
        this.callFunc = callBack;
        this.callFunc1 = callBack1;
        this.thisFunc = thisObject;
        this.creatTw()
    }

    private creatTw(){
        this.obj.addTransformation(1,this.sceneTw,this);
    }

    public twInt(){
        this.obj.alpha =0;
        this.obj.y =0;
        egret.Tween.get(this.obj).to({alpha:1},400);
    }

    private sceneTw(num:number){
        switch (num){
            case -1:
                egret.Tween.get(this.obj).to({y:-640},500).call(this.callBack,this);
                break;
            case 1:
                egret.Tween.get(this.obj).to({y:640},500).call(this.callBack1,this);
                break;
        }
    }

    private callBack(){
        if(this.thisFunc){
            this.callFunc.call( this.thisFunc);
        }
    }
    private callBack1(){
        if(this.thisFunc){
            this.callFunc1.call( this.thisFunc);
        }
    }

}