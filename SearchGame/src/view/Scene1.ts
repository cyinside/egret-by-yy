/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScrollerScene{
    public constructor(){
        super();
        RES.getResByUrl("resource/assets/numbertxt.fnt", this.onLoadComplete, this,
            RES.ResourceItem.TYPE_FONT);

        this.createScnen();
    }

    private bitmapText:egret.BitmapText = new egret.BitmapText();
    private onLoadComplete(font:egret.BitmapFont):void {
        this.bitmapText.font = font;
        this.group.addChild(this.bitmapText);
        this.bitmapText.x = 500;
        this.bitmapText.y = 180;
    }

    private bg1:UIBitmapDisplay;
    private picA:BitmapDisplay;
    private picB:BitmapDisplay;
    private picMaskA:BitmapDisplay;
    private picMaskB:BitmapDisplay;
    private pointarrA:Array<any> = new Array();
    private pointarrB:Array<any> = new Array();
    private score:number = 0;
    private pass:BitmapDisplay;
    private timeClock:TimeClock;
    private resultView:ResultView;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.group.addChild(this.bg1);

        this.timeClock = new TimeClock();
        this.group.addChild(this.timeClock);
        this.timeClock.y = 180;
        this.timeClock.x = 140;

        this.picA = new BitmapDisplay();
        this.picA.x = this.width/2;
        this.picA.y = 430;
        this.picA.touchEnabled = true;
        this.picA.addEventListener(egret.TouchEvent.TOUCH_TAP,this.cutTime,this);
        this.group.addChild(this.picA);

        this.picB = new BitmapDisplay();
        this.picB.x = this.width/2;
        this.picB.y = 800;
        this.picB.touchEnabled = true;
        this.picB.addEventListener(egret.TouchEvent.TOUCH_TAP,this.cutTime,this);
        this.group.addChild(this.picB);

        this.picMaskA = new BitmapDisplay("picMask");
        this.picMaskA.anchorOffsetX = this.picMaskA.width/2;
        this.picMaskA.anchorOffsetY = this.picMaskA.height/2;
        this.picMaskA.x = this.picA.x;
        this.picMaskA.y = this.picA.y;
        this.group.addChild(this.picMaskA);

        this.picMaskB = new BitmapDisplay("picMask");
        this.picMaskB.anchorOffsetX = this.picMaskB.width/2;
        this.picMaskB.anchorOffsetY = this.picMaskB.height/2;
        this.picMaskB.x = this.picB.x;
        this.picMaskB.y = this.picB.y;
        this.group.addChild(this.picMaskB);

        for(var i:number=0;i<GameSeting.maxTouchNum;i++){
            var touchPointA:BitmapDisplay = new BitmapDisplay("circle");
            GameSeting.getInstance().setCenter(touchPointA,0);
            this.pointarrA.push(touchPointA);

            var touchPointB:BitmapDisplay = new BitmapDisplay("circle");
            GameSeting.getInstance().setCenter(touchPointB,0);
            this.pointarrB.push(touchPointB);

            touchPointA.alpha = 0;
            touchPointB.alpha = 0;
            touchPointA.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
            touchPointB.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        }

        this.bitmapText.text = "0/1";

        this.pass = new BitmapDisplay("pass");
        this.pass.scaleX = this.pass.scaleY = 0;
        this.pass.x = 170;
        this.pass.y = 500;
        this.group.addChildAt(this.pass,99);

        this.resultView = new ResultView();
        this.setHorizontalCenter(this.resultView);
        this.setVerticalCenter(this.resultView);

        this.chapterSeting();
        this.setFullScreen();
        this.setViewRect();

        Global.addEventListener(DataEvent.GAMEOVER,this.gameOverHandle,this);
        Global.addEventListener(DataEvent.RETRYGAME,this.retry,this);
    }

    private chapterSeting(){
        var chapterNum = GameSeting.chapterNum;
        this.bitmapText.text = this.score.toString()+"/"+GameSeting.chapterNum.toString();
        var lactionArr:Array<any> = GameSeting.getInstance().pointLocation(chapterNum);
        this.picA.setBitmapByName(chapterNum+"a");
        this.picB.setBitmapByName(chapterNum+"b");
        GameSeting.getInstance().setCenter(this.picA,1);
        GameSeting.getInstance().setCenter(this.picB,1);

        var ex:number = 50;
        var ey:number = 290;
        for(var i:number =0;i<chapterNum;i++){
            this.pointarrA[i].x = lactionArr[i].x+ex;
            this.pointarrA[i].y = lactionArr[i].y+ey;
            this.pointarrA[i].name = i.toString();
            this.group.addChild(this.pointarrA[i]);
            //this.pointarrA[i].alpha =1;
            this.pointarrA[i].touchEnabled = true;

            this.pointarrB[i].x = this.pointarrA[i].x;
            this.pointarrB[i].y = this.pointarrA[i].y+this.picA.height+45;
            this.pointarrB[i].name = i.toString();
            this.group.addChild(this.pointarrB[i]);
            //this.pointarrB[i].alpha =1;
            this.pointarrB[i].touchEnabled = true;
        }
    }

    private touchHandle(evt:egret.TouchEvent){
        console.log("touchHandle");
        var num =parseInt(evt.target.name);
        this.pointarrA[num].touchEnabled =false;
        this.pointarrB[num].touchEnabled =false;
        this.pointarrA[num].alpha =1;
        this.pointarrB[num].alpha =1;
        this.pointHandle(num)
    }

    private pointHandle(num:number){
        console.log("pointHandle");
        this.score++;
        console.log(this.score);
        this.bitmapText.text = this.score.toString()+"/"+GameSeting.chapterNum.toString();

        //egret.Tween.get(this.pointarrA[num]).to({alpha:1},200);

        if(this.score==GameSeting.chapterNum){
            egret.setTimeout(function () {
                this.cheakPass(this.score);
            },this,500);
        }
    }

    private cheakPass(num:number){
        console.log("cheakPass");
        switch (num){
            case 1:
                this.timeClock.stopClock();
                this.group.addChild(this.resultView);
                this.resultView.setScene(2);
                this.setPicTouch(0);
                break;

            case GameSeting.chapterNum:
                this.group.addChild(this.pass);
                egret.Tween.get(this.pass).to({scaleX:0.7,scaleY:0.7},500,egret.Ease.backInOut).wait(400).call(
                    function(){
                        this.reset();
                        egret.setTimeout(this.chapterPass,this,300);
                    },this);
                break;

            case 99:
                if(GameSeting.chapterNum>0){
                    this.timeClock.stopClock();
                    this.group.addChild(this.resultView);
                    this.resultView.setScene(3);
                    this.setPicTouch(0);
                }
                break;
        }
    }

    private reset(){
        console.log("reset");
        this.score=0;
        for(var i:number=0;i<GameSeting.maxTouchNum;i++){
            this.pointarrA[i].alpha =0;
            this.pointarrB[i].alpha =0;
            egret.Tween.removeTweens(this.pointarrA[i]);
            this.pointarrB[i].touchEnabled =false;
            if(this.contains(this.pointarrA[i])){
                this.group.removeChild(this.pointarrA[i]);
            }
            if(this.contains(this.pointarrB[i])){
                this.group.removeChild(this.pointarrB[i]);
            }
        }
        this.pass.scaleX = this.pass.scaleY = 0;
    }

    public retry(){
        this.reset();
        GameSeting.chapterNum = 5;
        GameSeting.getInstance().pointLocation(6);
        this.chapterSeting();
        this.bitmapText.text = "0/5";
        this.timeClock.resetTime();
        this.group.removeChild(this.resultView);
        this.setPicTouch(1);
    }

    public chapterPass(){
        console.log("chapterPass");
        GameSeting.chapterNum--;
        this.chapterSeting();
    }

    private gameOverHandle(){
        this.cheakPass(99);
    }

    private cutTime(){
        ShockUtils.getInstance().shock(ShockUtils.getInstance().SPRITE,this);
        this.timeClock.cutTime();
    }

    private setPicTouch(type:number){
        switch (type){
            case 0:
                this.picA.touchEnabled = false;
                this.picB.touchEnabled = false;
                break;
            case 1:
                this.picA.touchEnabled = true;
                this.picB.touchEnabled = true;
                break;
        }
    }
}