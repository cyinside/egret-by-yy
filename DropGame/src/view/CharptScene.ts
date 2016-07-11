/**
 * Created by cyy on 15/11/13.
 */
class CharptScene extends DisplayScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private allroleArr:Array<any> = new Array();
    private roleArr:Array<any> = new Array();
    private dropArr:Array<any> = new Array();
    private charptTimer:egret.Timer;

    private maxRoleNum:number =64;
    private starNum:number = 0;
    private boomNum:number = 0;
    private speedNum:number = 4;
    private distance:number = 0;
    private role1:Role;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.bg1.touchEnabled = false;
        this.addChild(this.bg1);

        //this.role1 = new Role;
        //this.setHorizontalCenter(this.role1);
        //this.setVerticalCenter(this.role1);
        //this.role1.setRoleType(2);
        //this.addChild(this.role1);

        for(var i:number =0;i<this.maxRoleNum;i++){
                var role = new Role();
                this.allroleArr.push(role);
        }

        this.charptTimer = new egret.Timer(5000,1);
        this.charptTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.changdeCharpt,this);

        //this.roleTimer = new egret.Timer(1000,2);
        ////this.roleTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.changdeCharpt,this);
        //this.roleTimer.addEventListener(egret.TimerEvent.TIMER,this.pushInDrop,this);

        Global.addEventListener(DataEvent.IS_TOUCH,this.removeRoleDecide,this);
        this.changdeCharpt();
        this.setFullScreen();
    }

    private charptNum:number  =0;
    private changdeCharpt(){
        this.charptNum++;
        this.charptCtrl(this.charptNum);
    }

    private charptCtrl(num:number){
        switch (num){
            case 1:
                this.starNum = 1;
                this.boomNum = 1;
                this.speedNum = 4;
                this.distance = 23;
                break;
            case 2:
                this.starNum = 2;
                this.boomNum = 2;
                this.speedNum = 8;
                this.distance = 18;
                break;
            case 3:
                this.starNum = 4;
                this.boomNum = 4;
                this.speedNum = 12;
                this.distance = 15;
                break;
            case 4:
                this.starNum = 8;
                this.boomNum = 8;
                this.speedNum = 16;
                this.distance = 13;
                break;
            case 5:
                this.starNum = 16;
                this.boomNum = 16;
                this.speedNum = 30;
                this.distance = 5;
                break;
        }
        this.setRole();
    }

    private setRole(){
        for(var i:number=0;i<this.starNum;i++){
            this.allroleArr[i].setRoleType(1);
            this.addChild(this.allroleArr[i]);
            this.allroleArr[i].y = -this.allroleArr[i].height-300;
            this.allroleArr[i].x = this.setX();
            this.allroleArr[i].twspeed=this.speedNum;
            this.roleArr.push(this.allroleArr[i]);
        }

        for(var j:number=this.starNum;j<this.boomNum+this.starNum;j++){
            this.allroleArr[j].setRoleType(2);
            this.addChild(this.allroleArr[j]);
            this.allroleArr[j].y = -this.allroleArr[j].height-300;
            this.allroleArr[j].x = this.setX();
            this.allroleArr[j].twspeed=this.speedNum;
            this.roleArr.push(this.allroleArr[j]);
        }
        //this.roleTimer.reset();
        //this.roleTimer.start();
        this.startGame();
        this.rTimeCoun=0;
    }

    private pushInDrop(){
        console.log("pushInDrop");
        var id:number = Math.floor(Math.random()*this.roleArr.length);
        this.dropArr.push(this.roleArr[id]);
        this.roleArr.splice(id,1);
        console.log( this.dropArr);
    }

    private roleTw(){
        for(var i:number=0;i<this.dropArr.length;i++){
            this.dropArr[i].move(this.speedNum);
            this.dropArr[i].rloeId = i;
            //console.log(i,this.dropArr[i].x,this.dropArr[i].y);
            if(this.dropArr[i].y>this.height+this.dropArr[i].height||this.dropArr[i].is_Touch==true){
                this.removeRole(i);
                return;
            }
        }
    }
    private roleTw1(){
        this.role1.move(4);
    }

    private removeRoleDecide(e){
        if(e.param.is_bingo==true){
            egret.Tween.get(this.dropArr[e.param.touchID]).to({x:0,y:0},400,egret.Ease.sineIn).call(function(){
            this.dropArr[e.param.touchID].is_Touch=true;
            },this);
        }else{
            this.dropArr[e.param.touchID].is_Touch=true;
        }
    }

    private removeRole(num:number){
        this.removeChild(this.dropArr[num]);
            this.dropArr.splice(num,1);
            if( this.dropArr.length==0){
                this.charptTimer.reset();
                this.charptTimer.start();
            }
    }

    private setX(){
        var num:number = Math.floor(Math.random()*3+1);
        var ex:number =  this.width*(1/4);
        console.log(ex);
        switch (num){
            case 1:
                var x = ex;
                break;
            case 2:
                var x =  ex*2;
                break;
            case 3:
                var x = ex*3;
                break;
        }
        return x;
    }

    private rTimeNum:number=0;
    private rTimeCoun:number=0;
    private rTimer(){
        if(this.rTimeCoun==this.boomNum+this.starNum){
            return;
        }
        this.rTimeNum++;
        console.log("rTimeNum"+this.rTimeNum);
        if(this.rTimeNum> this.distance){
            this.rTimeCoun++;
            this.rTimeNum=0;
            this.pushInDrop();
            console.log("rTimeCoun"+this.rTimeCoun);
        }
    }

    private startGame(){
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }
    private stopGame(){
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    private onEnterFrameHandler(){
        //this.roleTw1();
        this.roleTw();
        this.rTimer();
    }
}