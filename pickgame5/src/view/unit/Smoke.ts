class Smoke extends egret.DisplayObjectContainer{
    private sp:egret.Sprite;

    private xEndSpeed:number = 0;
    private xSlowSpeed:number = 0;
    private xSpeed:number = 0;
    private yEndSpeed:number = 0;
    private ySlowSpeed:number = 0;
    private ySpeed:number = 0;
    private dir:number;

    private alphaSpeed:number = 0.02;
    private scaleSpeed:number = 0.01;
    public remove:boolean = false;

    public constructor(dir:number){
        super();
        this.dir = dir;
        this.sp = new egret.Sprite();
        this.sp.graphics.beginFill(0xbcbcbc,0.6);
        this.sp.graphics.drawCircle(0,0,15);
        this.sp.graphics.endFill();
        this.addChild(this.sp);

        this.xEndSpeed = 0.5;
        this.xSlowSpeed = 0.01;
        this.xSpeed = 2;

        this.yEndSpeed = Math.random()*0.1 + 0.1;
        this.ySlowSpeed = Math.random()*0.005 + 0.001;
        this.ySpeed = 1;
    }

    public update():void{
        this.xSpeed -= this.xSlowSpeed;
        if(this.xSpeed <= this.xEndSpeed){
            this.xSpeed = this.xEndSpeed;
        }
        this.ySpeed -= this.xSlowSpeed;
        if(this.ySpeed <= this.yEndSpeed){
            this.ySpeed = this.yEndSpeed;
        }
        if(this.dir == 1){
            this.x -= this.xSpeed;
        }else{
            this.x += this.xSpeed;
        }
        this.y += this.ySpeed;
        this.scaleX += this.scaleSpeed;
        this.scaleY += this.scaleSpeed;
        this.sp.alpha -= this.alphaSpeed;
        if(this.sp.alpha <= 0){
            this.sp.alpha = 0;
            this.remove = true;
        }
    }
}