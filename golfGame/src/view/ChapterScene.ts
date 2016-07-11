/**
 * Created by cyy on 15/11/13.
 */
class ChapterScene extends DisplayScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private ball:BitmapDisplay;
    private line:BitmapDisplay;
    private clickhere:BitmapDisplay;
    private is_bingo:boolean=true;
    private barView:BarView;
    private infoView:InfoView;
    private infoBut:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg2");
        this.addChild(this.bg1);

        this.ball = new BitmapDisplay;
        this.ball.setBitmapByName("ball");
        this.ball.y = 850;
        this.ball.anchorOffsetX = this.ball.width/2;
        this.ball.anchorOffsetY = this.ball.height/2;
        this.ball.x = this.width/2;
        this.ball.touchEnabled = true;
        this.addChild(this.ball);

        this.line = new BitmapDisplay;
        this.line.setBitmapByName("line");
        this.line.y = 850;
        this.line.anchorOffsetX = this.line.width/2;
        this.line.anchorOffsetY = this.line.height/2;
        this.line.x = this.width/2;
        //this.line.touchEnabled = true;
        this.addChild(this.line);

        this.clickhere = new BitmapDisplay("clickhere");
        this.clickhere.y = 820;
        this.clickhere.x = 410;
        this.addChild(this.clickhere);

        this.barView = new BarView;
        this.barView.x = 20;
        this.barView.y = 200;
        this.addChild(this.barView);

        this.infoView = new InfoView;

        this.infoBut = new BitmapDisplay;
        this.infoBut.touchEnabled = true;

        this.ball.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
        this.ball.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);
        this.ball.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.touchEnd,this);

        Global.addEventListener(DataEvent.IS_RESULT,this.ballTweenHandle,this);
        egret.Tween.get(this.clickhere,{loop:true}).to({x:400},400,egret.Ease.sineIn).to({x:410},600,egret.Ease.sineIn);
        this.setFullScreen();
    }

    private touchBegin(){
        this.barView.startMove();
        this.ballTween(1);
    }

    private touchEnd(){
        this.barView.stopMove();
    }

    private ballTweenHandle(e){
        switch (e.param.is_bingo){
            case true:
                this.is_bingo = true;
                break;
            case false:
                this.is_bingo = false;
                break;
        }
        this.ballTween(2);
    }

    private ballTween(num:number) {
        switch (num){
            case 1:
                if(this.contains(this.clickhere)){
                    this.removeChild(this.clickhere);
                }
                this.removeChild(this.line);
                egret.Tween.get(this.ball,{loop:true}).to({x:310},80).to({x:330},80,egret.Ease.sineIn);
                break;
            case 2:
                if(this.is_bingo==false){
                    egret.Tween.pauseTweens(this.ball);
                    egret.Tween.get(this.ball).to({y:200},400,egret.Ease.sineOut).to({y:435,x:290},400,egret.Ease.sineIn).to({y:415,x:285},100,egret.Ease.sineIn).to({y:435,x:280},100,egret.Ease.sineIn).to({y:425,x:270},100,egret.Ease.sineIn).to({y:435,x:260},100,egret.Ease.sineIn).call(this.resultHandle,this);
                    egret.Tween.get(this.ball).to({scaleX:0.05,scaleY:0.05},800,egret.Ease.sineIn);
                }else if(this.is_bingo==true){
                    egret.Tween.pauseTweens(this.ball);
                    egret.Tween.get(this.ball).to({y:200,x:510},400,egret.Ease.sineOut).to({y:435,x:510},400,egret.Ease.sineIn).to({alpha:0}).call(this.resultHandle,this);
                        //.to({y:415,x:285},100,egret.Ease.sineIn).to({y:435,x:280},100,egret.Ease.sineIn).to({y:425,x:270},100,egret.Ease.sineIn).to({y:435,x:260},100,egret.Ease.sineIn);
                    egret.Tween.get(this.ball).to({scaleX:0.05,scaleY:0.05},800,egret.Ease.sineIn);
                }
                break;
        }
    }

    public retryGame(){
        this.ball.y = 850;
        this.ball.x = this.width/2;
        this.ball.scaleX = this.ball.scaleY =1;
        this.ball.alpha =1;
        this.addChild(this.line);
        this.barView.resetBar();
    }

    private resultHandle(){
        if(this.is_bingo==true){
            this.infoView.setInfo(3,this);
            this.addChild(this.infoView);

            this.infoBut.setBitmapByName("prizeBut");
            this.infoBut.y = 590;
            this.infoBut.name = "1";
        }else if(this.is_bingo==false){
            this.infoView.setInfo(2,this);
            this.addChild(this.infoView);

            this.infoBut.setBitmapByName("retryBut");
            this.infoBut.y = 590;
            this.infoBut.name = "2";
        }
        this.addChild(this.infoBut);
        this.setHorizontalCenter(this.infoBut);
        this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle1,this);
    }

    private touchHandle1(e:egret.TouchEvent){
        switch (e.target.name){
            case "1":
                this.bingo();
                break;
            case "2":
                this.fail();
                break;
        }
    }

    private bingo(){
        this.infoView.removeInfo(this);
        this.removeChild(this.infoBut);
        this.retryGame();
        SceneUtil.changeScene(3);
    }

    private fail(){
        this.retryGame();
        this.infoView.removeInfo(this);
        this.removeChild(this.infoBut);
    }
}