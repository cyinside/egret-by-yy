/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private resultView:BitmapDisplay;
    private circle2:BitmapDisplay;
    private startBut:BitmapDisplay;
    private remove:BitmapDisplay;
    private blackrect:egret.Shape;
    private isPrize:boolean;
    private gameDiv = document.createElement("div");
    private myImg:HTMLImageElement = document.createElement("img");
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("prizebg");
        this.bg1.touchEnabled = true;
        this.group.addChild(this.bg1);

        this.circle2 = new BitmapDisplay("circle2");
        this.circle2.anchorOffsetX = this.circle2.width/2;
        this.circle2.anchorOffsetY = this.circle2.height/2;
        this.circle2.x = 240;
        this.circle2.y = 540;
        this.group.addChild(this.circle2);

        this.startBut = new BitmapDisplay("startBut");
        this.startBut.anchorOffsetX = this.startBut.width/2;
        this.startBut.anchorOffsetY = this.startBut.height/2;
        this.startBut.x = this.width/2;
        this.startBut.y = 900;
        this.startBut.touchEnabled = true;
        this.group.addChild(this.startBut);
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.blackrect = new egret.Shape;
        this.blackrect.graphics.beginFill(0x000000,0.7);
        this.blackrect.graphics.drawRect(0,0,this.width,this.height);
        this.blackrect.graphics.endFill();

        this.resultView = new BitmapDisplay;
        this.resultView.alpha = 0;
        this.resultView.x =  40;
        this.setVerticalCenter(this.resultView);
        this.setHorizontalCenter(this.resultView);

        this.remove = new BitmapDisplay("remove");
        this.remove.x = 470;
        this.remove.y = 240;
        this.remove.touchEnabled = true;
        this.remove.addEventListener(egret.TouchEvent.TOUCH_TAP,this.retry,this);

        this.gameDiv.setAttribute("id", "gameDiv");
        this.gameDiv.style.width = "50%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "48%";
        this.gameDiv.style.left = "23%";
        this.gameDiv.style.display = "";
        this.myImg.src ="resource/assets/getPrize/code.jpg";
        this.myImg.style.width = "70%";

        this.setFullScreen();
        this.setViewRect();
    }

    private touchHandle(){
        this.startMusic();
        this.startBut.touchEnabled = false;

        //for(var i:number=0;i<10000;i++){
        DataModel.getInstance().onTouchHandle();
        //}

        Global.addEventListener(DataEvent.DATACOMPLETE,this.circleTween,this);
        Global.addEventListener(DataEvent.DATAONFAIL,this.onFaliHandle,this);
    }

    private num1:number = 0;
    private showResult(){
        this.group.addChild(this.blackrect);
        this.group.addChild(this.resultView);

        egret.Tween.get(this.resultView).to({alpha:1},800).call(function(){
            if(this.isPrize ==true){
                document.body.appendChild(this.gameDiv);
                this.gameDiv.appendChild(this.myImg);
            }
        },this);
        this.setVerticalCenter(this.resultView);
        this.setHorizontalCenter(this.resultView);

        if(this.isPrize==false){
            egret.setTimeout(function(){
                this.group.addChild(this.remove);
            },this,600);
        }
    }

    private circleTween(){
        if(DataModel.prizeWord.indexOf("book")!=-1){
            this.resultView.setBitmapByName("isprize");
            this.num1 = Math.floor(Math.random()*3+1);
            this.isPrize = true;
        }else if(DataModel.prizeWord.indexOf("0")!=-1){
            this.resultView.setBitmapByName("noprize");
            this.num1 = Math.floor(Math.random()*6+4);
            this.isPrize = false;
        }

        var rotationNum:number = 0;
        switch (this.num1){
            case 1:
                rotationNum =60;
                break;
            case 2:
                rotationNum =180;
                break;
            case 3:
                rotationNum =300;
                break;
            case 4:
                rotationNum =120;
                break;
            case 5:
                rotationNum =240;
                break;
            case 6:
                rotationNum =360;
                break;
        }

        if(this.num1>0){
            egret.Tween.get(this.circle2).to({rotation:rotationNum+(360*4)},4000,egret.Ease.sineOut)
                                          .wait(800).call(this.showResult,this);
        }
    }

    private onFaliHandle(){
        this.startBut.touchEnabled = true;
    }

    private retry(){
        this.startBut.touchEnabled = true;
        this.group.removeChild(this.resultView);
        this.resultView.alpha =0;
        this.group.removeChild(this.blackrect);
        this.group.removeChild(this.remove);
        this.isPrize = false;
    }


    private startMusic(){
        var musicDiv = document.getElementById("bgmusic");
        if(musicDiv["paused"]==true){
            musicDiv["play"]();
        }
    }
}