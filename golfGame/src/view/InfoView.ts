/**
 * Created by Administrator on 2016/7/7.
 */
class InfoView extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private blackRect:BlackRcet;
    private info:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.blackRect = new BlackRcet;
        this.blackRect.alpha =0;
        this.addChild(this.blackRect);
        this.blackRect.touchEnabled=true;

        this.info = new BitmapDisplay;
        this.addChild(this.info);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    private obj:DisplayScene;
    public setInfo(type:number=0,obj:DisplayScene=null){
        switch (type){
            case 1:
                this.info.setBitmapByName("rule");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha =1;
                break;
            case 2:
                this.info.setBitmapByName("failInfo");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha =1;
                this.blackRect.touchEnabled = false;
                break;
            case 3:
                this.info.setBitmapByName("bingoInfo");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha =1;
                this.blackRect.touchEnabled = false;
                break;
            case 4:
                this.info.setBitmapByName("no_prize");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha =1;
                this.blackRect.touchEnabled = false;
                break;
            case 5:
                this.info.setBitmapByName("is_prize");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha =1;
                this.blackRect.touchEnabled = false;
                break;
        }
        this.obj = obj;
    }

    private touchHandle(e:egret.TouchEvent){
        switch (e.target){
            case this.blackRect:
                this.removeInfo(this.obj);
                break;
        }
    }

    public removeInfo(obj:DisplayScene=null){
        obj.removeChild(this);
    }
}

