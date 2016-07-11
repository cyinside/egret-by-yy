class RoleBuff extends egret.DisplayObjectContainer{
    public buffBmp:BitmapDisplay;

    public constructor(){
        super();
        this.buffBmp = new BitmapDisplay();
        this.buffBmp.setBitmapByName("mist");
        this.y = 50;

    }

    public setState(state:number):void{
        switch (state){
            case 0:
                if(this.contains(this.buffBmp)){
                    this.removeChild(this.buffBmp);
                }
                break;
            case 1:
                this.addChild(this.buffBmp);
                break;
        }
    }
}
