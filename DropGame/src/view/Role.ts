/**
 * Created by Administrator on 2016/6/22.
 */
class Role extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.createScnen();
    }

    private role:BitmapDisplay;
    private boomLigt:BitmapDisplay;
    public twspeed:number = 4;
    public type:number = 0;
    public is_Touch:boolean = false;
    public rloeId:number =0;
    private rect:BitmapDisplay;
    private createScnen(){
        this.rect = new BitmapDisplay("rect");
        this.rect.alpha =0;
        this.addChild(this.rect);

        this.role = new BitmapDisplay("");
        this.role.scaleX = this.role.scaleY = 1.8;
        this.addChild(this.role);

        //this.boomLigt = new BitmapDisplay("boom1");
        this.rect.touchEnabled = true;
        this.rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.roleTouchHandle,this);
    }

    public setRoleType(num:number){
        switch (num){
            case 1:
                this.type = 1;
                this.role.setBitmapByName("star");
                this.rect.scaleX = this.rect.scaleY = 1.8;
                this.rect.x = -20;
                this.rect.y = -20;
                break;
            case 2:
                this.type = 2;
                this.role.setBitmapByName("boom");
                this.rect.scaleX = this.rect.scaleY = 1.2;
                this.rect.x = 10;
                this.rect.y = 70;
                break;
        }
        this.width = this.role.width;
        this.height = this.role.height;
        this.anchorOffsetX = this.role.scaleX*this.width/2;
        this.anchorOffsetY = this.role.scaleY*this.height/2;
    }

    public move(speed:number){
        this.y += speed;
        this.rotation +=15;
    }


    private roleTouchHandle(){
        //alert("touch");
        //return;
        var event:DataEvent = new DataEvent(DataEvent.IS_TOUCH);
        var type:number = this.type;
        switch (type){
            case 1:
                console.log("1");
                event.is_bingo=true;
                break;
            case 2:
                console.log("2");
                event.is_bingo=false;
                break;
        }
        Global.dispatchEvent(DataEvent.IS_TOUCH,event);
    }
}