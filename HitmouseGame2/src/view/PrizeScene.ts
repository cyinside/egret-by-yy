/**
 * Created by cyy on 15/11/13.
 */
class PrizeScene extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private resultView:BitmapDisplay;
    private circle1:BitmapDisplay;
    private circle2:BitmapDisplay;
    private startBut:BitmapDisplay;
    private retryBut:BitmapDisplay;
    private formBut:BitmapDisplay;
    //private formPage:FormPage;
    private blackrect:egret.Shape;
    private isPrize:boolean;
    private num1:number = 0;
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
        this.circle2.x = this.width/2
        this.circle2.y = 470;
        this.group.addChild(this.circle2);

        this.circle1 = new BitmapDisplay("circle1");
        this.circle1.anchorOffsetX = this.circle1.width/2;
        this.circle1.anchorOffsetY = this.circle1.height/2;
        this.circle1.x = this.width/2-2;
        this.circle1.y = 455;
        this.group.addChild(this.circle1);

        this.startBut = new BitmapDisplay("pstartBut");
        this.startBut.anchorOffsetX = this.startBut.width/2;
        this.startBut.anchorOffsetY = this.startBut.height/2;
        this.startBut.x = this.width/2;
        this.startBut.y = 482;
        this.startBut.touchEnabled = true;
        this.group.addChild(this.startBut);
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.formBut = new BitmapDisplay("formBut");
        this.formBut.anchorOffsetX = this.formBut.width/2;
        this.formBut.anchorOffsetY = this.formBut.height/2;
        this.formBut.x = this.width/2;
        this.formBut.y = 850;
        this.formBut.touchEnabled = true;
        this.formBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showinfo,this);

        this.retryBut = new BitmapDisplay("retryBut");
        this.retryBut.anchorOffsetX = this.retryBut.width/2;
        this.retryBut.anchorOffsetY = this.retryBut.height/2;
        this.retryBut.x = this.width/2;
        this.retryBut.y = 850;
        this.retryBut.touchEnabled = true;
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.retryGame,this);
        //
        //this.formPage = new FormPage;
        //this.setHorizontalCenter(this.formPage);
        //this.setVerticalCenter(this.formPage);

        this.blackrect = new egret.Shape;
        this.blackrect.graphics.beginFill(0x000000,0.7);
        this.blackrect.graphics.drawRect(0,0,this.width,this.height);
        this.blackrect.graphics.endFill();

        this.resultView = new BitmapDisplay;
        this.resultView.alpha = 0;

        this.setFullScreen();
        this.setViewRect();


        Global.addEventListener(DataEvent.DATACOMPLETE,this.circleTween,this);
        Global.addEventListener(DataEvent.DATAONFAIL,this.onFaliHandle,this);
    }

    private touchHandle(){
        this.startBut.touchEnabled = false;
        DataModel.getInstance().onTouchHandle();
    }

    private circleTween(){
        if(DataModel.prizeWord.indexOf("gift")!=-1){
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

    private showResult(){
        this.group.addChild(this.blackrect);
        this.group.addChild(this.resultView);
        this.setHorizontalCenter(this.resultView);
        this.setVerticalCenter(this.resultView);

        egret.Tween.get(this.resultView).to({alpha:1},800).call(function(){
            this.showBut();
        },this);
    }

    private showBut(){
        if(this.isPrize==true){
            this.group.addChild(this.formBut);
        }else{
            this.group.addChild(this.retryBut);
        }
    }

    private onFaliHandle(){
        this.startBut.touchEnabled = true;
    }

    private showinfo(){
        SceneUtil.changeScene(5);
    }

    private retryGame(){
        DataModel.prizeWord="";
        this.startBut.touchEnabled = true;
        this.group.removeChild(this.resultView);
        this.group.removeChild(this.blackrect);
        this.group.removeChild(this.retryBut);
        SceneUtil.changeScene(2);
        this.circle2.rotation =0;
    }

    //中：60，180,300
    //不中：120，240,360
}