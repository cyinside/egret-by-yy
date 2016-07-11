class Drop extends egret.DisplayObjectContainer{
    protected bmp:BitmapDisplay;
    public dropInfo:DropInfo;
    protected speed:number = 5;
    public markRemove:number = 0;

    public constructor(type:number = 0){
        super();
    }

    protected drawBorder():void{
        var sp:egret.Shape = new egret.Shape();
        var rect:egret.Rectangle = this.bmp.getBounds();
        sp.graphics.lineStyle(3,0xffffff);
        sp.graphics.drawRect(rect.x,rect.y,rect.width,rect.height);
        this.addChild(sp);
    }

    public move():void{
        this.speed += this.dropInfo.aspeed;
        if(this.speed >= this.dropInfo.maxSpeed){
            this.speed = this.dropInfo.maxSpeed;
        }
        this.y += this.speed;
    }

    public out():boolean{
        if(this.y > this.parent.height){
            return true;
        }
        return false;
    }
}