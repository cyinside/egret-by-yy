class BlowUp extends egret.DisplayObjectContainer{
    private mc:MovieClip;
    public state:number = 1;

    public constructor(){
        super();
        this.mc = new MovieClip("blow_up_json","blow_up_png","blow_up","blow_up",false);
        this.mc.frameRate = 30;
        this.addChild(this.mc);
        this.mc.addEventListener(egret.Event.COMPLETE,this.completeHandler,this);
    }

    public update():void{
        this.mc.update();
    }

    private completeHandler(e:egret.Event):void{
        this.state = 2;
        this.mc.removeEventListener(egret.Event.COMPLETE,this.completeHandler,this);
    }
}