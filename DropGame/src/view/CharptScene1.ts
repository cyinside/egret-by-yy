/**
 * Created by Administrator on 2016/6/27.
 */
class CharptScene1 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private roleArr:Array<any> = new Array();
    private charptTimer:egret.Timer;
    private roleTimer:egret.Timer;

    private maxRoleNum:number = 64;
    private starNum:number = 0;
    private boomNum:number = 0;
    private speedNum:number = 4;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.group.addChild(this.bg1);

        this.charptCtrl(1);
    }

    private charptCtrl(num:number){
        switch (num){
            case 1:
                this.starNum = 1;
                this.boomNum = 1;
                this.speedNum = 4;
                break;
            case 2:
                this.starNum = 2;
                this.boomNum = 2;
                this.speedNum = 5;
                break;
            case 3:
                this.starNum = 4;
                this.boomNum = 4;
                this.speedNum = 6;
                break;
            case 4:
                this.starNum = 8;
                this.boomNum = 8;
                this.speedNum = 7;
                break;
            case 5:
                this.starNum = 16;
                this.boomNum = 16;
                this.speedNum = 8;
                break;
        }
        this.setRole();
    }

    private setRole(){
        for(var i:number=0;i<this.starNum;i++){
            var role = new Role();
            role.setRoleType(1);
            this.group.addChild(role);
            role.y = -role.height-300;
            role.x = this.setX();
            role.twspeed=this.speedNum;
        }

        for(var j:number=this.starNum;j<this.boomNum+this.starNum;j++){
            var role = new Role();
            role.setRoleType(2);
            this.group.addChild(role);
            role.y = -role.height-300;
            role.x = this.setX();
            role.twspeed=this.speedNum;
        }
    }

    private setX(){
        var num:number = Math.floor(Math.random()*2+1);
        switch (num){
            case 1:
                var x = Math.floor(this.width/3);
                break;
            case 2:
                var x =  Math.floor(this.width/3)*2;
                break;
        }
        return x;
    }
}