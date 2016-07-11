/**
 * Created by cyy on 15/9/9.
 */
class ChapterScene extends DisplayScrollerScene{
    public constructor() {
        super();
        this.createScene();
    }

    private timeOut1:egret.Timer;
    private timeOut2:egret.Timer;
    private timeOut3:egret.Timer;
    private roleArr:Array<any> = new Array();
    private role2Arr:Array<any> = new Array();
    private bg:UIBitmapDisplay;
    private role:Role;
    private role2:Role;
    private scoreTXT:egret.TextField;
    private timeTXT:egret.TextField;
    private resultTXT:egret.TextField;
    private windowBg:BitmapDisplay;
    private okBut:BitmapDisplay;
    private retryBut:BitmapDisplay;
    private getPrizeBut:BitmapDisplay;
    private windowtxt:BitmapDisplay;
    private blackRect:BlackRcet;
    private is_fristTime:boolean = true;

    private timeNum:number = 20;
    public score:number = 0;
    public maxscore:number = 100;
    private idnum:number = 1;
    private speed:number = 1;
    private bmNum:number = 2;
    private createScene(){
        this.width = 640;
        this.height = 1030;

        //this.timeOut1 = new egret.Timer(ConfigModel.timeSpeed,0);
        //this.timeOut1.addEventListener(egret.TimerEvent.TIMER,this.setHole,this);

        this.timeOut2 = new egret.Timer(4000,3);
        this.timeOut2.addEventListener(egret.TimerEvent.TIMER,this.changeIdNum,this);

        this.timeOut3 = new egret.Timer(1000,20);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER,this.timeCounter,this);
        this.timeOut3.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.gameOver,this);

        this.bg = new UIBitmapDisplay("bg");
        this.group.addChild(this.bg);

        for(var i:number=0;i<6;i++) {
            this.role = new Role();
            this.roleArr.push(this.role);
            this.group.addChild(this.role);
        }//坏地鼠

        for(var i:number=0;i<5;i++) {
            this.role2 = new Role();
            this.role2Arr.push(this.role2);
            this.group.addChild(this.role2);
        }//好地鼠

        this.scoreTXT = new egret.TextField;
        this.scoreTXT.text = "Score:"+"\n"+this.score;
        this.scoreTXT.size = 30;
        this.scoreTXT.textColor = 0xffc20e;
        this.scoreTXT.bold = true;
        this.scoreTXT.stroke = 3;
        this.scoreTXT.strokeColor = 0xFFFFFF;
        this.scoreTXT.x = 60;
        this.scoreTXT.y = 60;
        this.group.addChild(this.scoreTXT);

        this.timeTXT = new egret.TextField;
        this.timeTXT.text = "Time:"+"\n"+this.score;
        this.timeTXT.size = 30;
        this.timeTXT.textColor = 0xffc20e;
        this.timeTXT.bold = true;
        this.timeTXT.stroke = 3;
        this.timeTXT.strokeColor = 0xFFFFFF;
        this.timeTXT.anchorOffsetX = this.timeTXT.width/2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height/2;
        this.timeTXT.x = 340+this.timeTXT.width/2;
        this.timeTXT.y = 60+this.timeTXT.height/2;
        this.group.addChild(this.timeTXT);

        this.resultTXT = new egret.TextField;
        this.resultTXT.size = 60;
        this.resultTXT.textColor = 0xffc20e;
        this.resultTXT.bold = true;
        this.resultTXT.stroke = 3;
        this.resultTXT.strokeColor = 0xFFFFFF;
        this.resultTXT.y = 400;

        this.blackRect = new BlackRcet;
        this.group.addChild(this.blackRect);

        this.windowBg = new BitmapDisplay("windowBg");
        this.setHorizontalCenter(this.windowBg);
        this.setVerticalCenter(this.windowBg);

        this.windowtxt = new BitmapDisplay("ruletxt");
        this.setHorizontalCenter(this.windowtxt);
        this.setVerticalCenter(this.windowtxt);

        this.okBut = new BitmapDisplay("okBut");
        this.okBut.y = 800;
        this.setHorizontalCenter(this.okBut);
        this.okBut.touchEnabled = true;

        this.retryBut = new BitmapDisplay("retryBut");
        this.retryBut.y = 800;
        this.setHorizontalCenter(this.retryBut);
        this.retryBut.touchEnabled = true;

        this.getPrizeBut = new BitmapDisplay("getprizeBut");
        this.getPrizeBut.y = 800;
        this.setHorizontalCenter(this.getPrizeBut);
        this.getPrizeBut.touchEnabled = true;

        Global.addEventListener(ScoreEvent.ADD_SCORE,this.addScoreHandler,this);
        Global.addEventListener(ScoreEvent.CUT_SCORE,this.cutScoreHandler,this);
        Global.addEventListener(ScoreEvent.REMOVE_CHILD,this.remove,this);
        this.okBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeItem,this);
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeItem,this);
        this.getPrizeBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoPrize,this);

        this.showrule();

        this.setFullScreen();
        this.setViewRect();

        //this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    frameNum:number=0;
    private onEnterFrameHandler(){
        this.frameNum++;
        if(this.frameNum>ConfigModel.timeSpeed){
            this.frameNum=0;
            this.setHole();
        }
    }

    private showrule(){
        this.group.addChild(this.windowBg);
        this.group.addChild(this.windowtxt);
        this.group.addChild(this.okBut);
    }

    private changeIdNum(){
        this.idnum--;
        this.speed++;
        if(this.speed>2){
            this.speed=3;
        }
        this.role.changeSpeed(this.speed);
        console.log("@@@@@@@@@@@@@@@@@"+this.speed);

        //this.bmNum++;
        //if(this.bmNum>4){
        //    this.bmNum=4;
        //}
    }

    public setHole(){
        var holeArr:Array<any> = [0,1,2,3,4,5,6,7,8];
        //for(var i:number=0;i<this.idnum ;i++){
            for(var j:number=0;j<holeArr.length;j++){
                var roleID = Math.floor(Math.random() * holeArr.length);
                holeArr.splice(roleID,1);
                //console.log(holeArr);
                break;
            }
        //}
        this.setRole(holeArr,this.bmNum);
    }

    public setRole(bRoleArr:Array<any>,role2Num:number){
        var gRoleArr:Array<any> = new Array;
        for(var i:number = 0;i<role2Num;i++){
            for(var j:number=0;j<bRoleArr.length;j++){
                var role2ID = Math.floor(Math.random() * bRoleArr.length);
                gRoleArr.push(bRoleArr[role2ID]);
                bRoleArr.splice(role2ID,1);
                break;
            }
        }

        for(var k:number = 0;k<gRoleArr.length;k++){
            var mouse:Role;
            mouse = this.role2Arr[k];
            mouse.show(gRoleArr[k],1);
            this.group.addChild(this.role);
        }
        for(var n:number = 0;n<bRoleArr.length;n++){
            var mouse:Role;
            mouse = this.roleArr[n];
            mouse.show(bRoleArr[n],0);
            this.group.addChild(this.role2);
        }
    }

    private twNum:number =1;
    private addScoreHandler():void{
        this.score += 5;
        this.twNum++;
        if(this.twNum>3){
            this.twNum=1
        }
        this.scoreTXT.text = "Score:"+"\n"+this.score.toString();
        this.bingoTW();
    }

    private cutScoreHandler(){
        //this.score -= 100;
        //this.scoreTXT.text = "Score:"+"\n"+this.score.toString();
        this.failTW();
        this.timeNum-=2;
        if(this.timeNum<0){
            this.timeNum=0;
        }
        this.timeTXT.text = "Time:"+"\n"+this.timeNum.toString();
        this.timeTXT.anchorOffsetX = this.timeTXT.width/2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height/2;
    }

    private timeCounter(){
        this.is_fristTime = false;
        this.timeNum--;
        if(this.timeNum<1){
            this.timeOut3.stop();
            this.gameOver();
        }
        this.timeTXT.text = "Time:"+"\n"+this.timeNum.toString();
        this.timeTXT.anchorOffsetX = this.timeTXT.width/2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height/2;
    }

    private gameOver(){
        if(this.score >this.maxscore){
            this.gameHandle(1);
        }else{
            this.gameHandle(0);
        }
    }

    private gameHandle(num:number){
        this.stopAll();
        this.group.addChild(this.blackRect);
        this.group.addChild(this.windowBg);
        this.group.addChild(this.windowtxt);

        switch (num){
            case 0:
                this.windowtxt.setBitmapByName("failtxt");
                this.group.addChild(this.retryBut);
                break;
            case 1:
                this.windowtxt.setBitmapByName("successtxt");
                this.group.addChild(this.getPrizeBut);
                break;
        }

        this.resultTXT.text = this.score.toString()+"分";
        this.setHorizontalCenter(this.resultTXT);
        this.setHorizontalCenter(this.windowtxt);
        this.group.addChild(this.resultTXT);
    }

    private remove(){
        console.log("remove");
        if(this.contains(this.role)){
            this.group.removeChild(this.role);
        }
        if(this.contains(this.role2)){
            this.group.removeChild(this.role2);
        }
    }

    private failTW(){
        ShockUtils.getInstance().shock(ShockUtils.getInstance().SPRITE,this);
        egret.Tween.get(this.timeTXT).to({scaleX:1.5,scaleY:1.5},200).to({rotation:10},80).to({rotation:-10},80).to({rotation:10},80).to({rotation:0},80)
            .to({scaleX:1,scaleY:1},200);
    }

    private bingoTW(){
        console.log(this.twNum);
        egret.Tween.get(this.scoreTXT).to({scaleX:1.5,scaleY:1.5},300,egret.Ease.backInOut).to({scaleX:1,scaleY:1},300,egret.Ease.backInOut);
    }

    private stopAll(){
        this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    public reset(){
        this.timeOut2.reset();
        this.timeOut3.reset();
        this.timeNum = 20;
        this.idnum = 4;
        this.score =0;
        this.speed = 1;
        this.bmNum = 2;
        this.scoreTXT.text = "Score:"+"\n"+this.score;
        this.timeTXT.text = "Time:"+"\n"+this.timeNum;
        this.timeTXT.anchorOffsetX = this.timeTXT.width/2;
        this.timeTXT.anchorOffsetY = this.timeTXT.height/2;

        this.start();
    }

    private start(){
        if(this.contains(this.windowBg)){
            this.group.removeChild(this.windowBg);
            this.group.removeChild(this.windowtxt);
        }

        this.timeOut2.start();
        this.timeOut3.start();
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrameHandler,this);
    }

    private removeItem(){
        if(this.contains(this.retryBut)){
            this.group.removeChild(this.retryBut);
        }
        if(this.contains(this.windowBg)){
            this.group.removeChild(this.windowBg);
            this.group.removeChild(this.windowtxt);
        }
        if(this.contains(this.okBut)){
            this.group.removeChild(this.okBut);
        }
        if(this.contains(this.resultTXT)){
            this.group.removeChild(this.resultTXT);
        }
        if(this.contains(this.blackRect)){
            this.group.removeChild(this.blackRect);
        }
        if(this.contains(this.getPrizeBut)){
            this.group.removeChild(this.getPrizeBut);
        }
        this.reset();
    }

    private gotoPrize(){
        SceneUtil.changeScene(3);
    }

    public init(){
        if(this.is_fristTime==true){
            return 0;
        }else {
            this.removeItem();
        }
    }
}