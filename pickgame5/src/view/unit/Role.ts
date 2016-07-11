class Role extends egret.DisplayObjectContainer{
    public role:MovieClip;
    private buff:RoleBuff;
    public roleInfo:RoleInfo;
    public speed:number = 0;
    public maxSpeed:number = 0;
    private state:number = 0; //0:normal 1:slow

    public dir:number = 1;
    private angle:number = 0;
    private baseY:number = 0;
    private y_speed:number = 0.01;
    private easing:number = 0.05;
    private targetX:number = 0;

    private configModel:ConfigModel;

    public constructor(){
        super();
        this.configModel = ConfigModel.getInstance();
        this.roleInfo = this.configModel.roleInfo;

        this.role = new MovieClip("role_json","role_png","role","walk",true);
        this.role.scaleX = this.role.scaleY = 1;
        this.role.frameRate = this.roleInfo.frameRate;
        this.addChild(this.role);

        this.buff = new RoleBuff();
        this.addChild(this.buff);

        //this.drawBorder();
    }

    private drawBorder():void{
        var sp:egret.Shape = new egret.Shape();
        var rect:egret.Rectangle = this.role.getBounds();
        sp.graphics.lineStyle(3,0xffffff);
        sp.graphics.drawRect(rect.x,rect.y,rect.width,rect.height);
        this.addChild(sp);
    }

    public clickWalk():void{
        //this.role.gotoAndPlay("walk");
        //this.speed += this.roleInfo.aspeed;
        //if(this.speed > this.roleInfo.maxSpeed){
        //    this.speed = this.roleInfo.maxSpeed;
        //}
        //if(this.dir == -1){
        //    this.speed*=-1;
        //}
    }

    private orientationWalk():void{
        this.speed += this.roleInfo.aspeed;
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.dir == 1){
            this.x += this.speed;
        }else{
            this.x -= this.speed;
        }
    }

    public left():void{
        this.role.dir(-1);
        this.dir = -1;
        this.stop();
    }

    public right():void{
        this.role.dir(1);
        this.dir = 1;
        this.stop();
    }

    public stop():void{
        this.speed = 0;
    }

    public update():void{
        this.role.update();
        this.orientationWalk();
        //this.updateX();
        this.updateY();
    }

    private updateY():void{
        this.y = this.baseY + Math.sin(this.angle) * 10;
        this.angle += this.y_speed;
    }

    private updateX():void{
        var dx:number = this.targetX - this.x;
        if(Math.abs(dx) < 1){
            this.x = this.targetX;
        }else{
            var vx:number = dx * this.easing;
            this.x += vx;
        }
    }

    public setTargetX(value:number):void{
        this.targetX = value;
    }

    public setBaseY(value:number):void{
        this.baseY = value;
    }

    private timeOutID:number = 0;
    public setState(state:number):void{
        this.state = state;
        this.buff.setState(this.state);
        switch (this.state){
            case 0:
                this.maxSpeed = this.roleInfo.maxSpeed;
                break;
            case 1:
                this.maxSpeed = this.roleInfo.slowSpeed;
                this.timeOutID = egret.setTimeout(this.slowTimeHandler,this,10000);
                break;
        }
    }

    private slowTimeHandler():void{
        this.setState(0);
        egret.clearTimeout(this.timeOutID);
    }

}