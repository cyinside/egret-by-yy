/**
 * Created by cyy on 16/3/29.
 */
class Scene2 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    public showPage:BitmapDisplay;
    private contTXT:TextView;
    public unameTXT:NameView;
    public uheadIMG:HeadImg;
    private startBut:BitmapDisplay;
    public retryBut:BitmapDisplay;
    public box:egret.Shape;
    public boxtxt:egret.TextField;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.showPage = new BitmapDisplay;
        this.addChildByScroller(this.showPage);
        this.showPage.touchEnabled = true;
        this.showPage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        this.contTXT = new TextView;
        this.addChildByScroller(this.contTXT);

        this.unameTXT = new NameView;
        this.addChildByScroller(this.unameTXT);

        this.uheadIMG = new HeadImg;
        this.addChild(this.uheadIMG);

        this.startBut = new BitmapDisplay("startbut1");
        this.startBut.y = 960;
        this.setHorizontalCenter(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        if(ConfigModel.getInstance().isShowPage==true){
            this.addChild(this.startBut);
            egret.Tween.get(this.startBut,{loop:true}).to({alpha:0},1200,egret.Ease.sineIn).to({alpha:1},600,egret.Ease.sineIn).wait(500);
        }

        this.box = new egret.Shape;
        this.box.graphics.beginFill(0x000000,0.5);
        this.box.graphics.drawRect(0,0,this.width,60);
        this.box.graphics.endFill();
        this.addChild(this.box);

        this.boxtxt = new egret.TextField;
        this.boxtxt.text = "点击屏幕变换样式，右上角分享邀请函";
        this.boxtxt.size = 23;
        this.boxtxt.alpha = 0;
        this.boxtxt.anchorOffsetX = this.boxtxt.width/2;
        this.boxtxt.x = this.width/2;
        this.boxtxt.y = 20;
        this.addChild(this.boxtxt);


        this.retryBut = new BitmapDisplay("retryBut");
        this.retryBut.x = this.width;
        this.retryBut.y = 950;
        this.retryBut.touchEnabled = true;
        this.addChild(this.retryBut);
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.retry,this);

        this.setFullScreen();
        Global.addEventListener(DataEvent.HEADIMGCOMP,this.headImgReady,this);
        Global.addEventListener(DataEvent.GOTOSCENE2,this.headImgReady,this);

    }

    private retry(){
        Global.dispatchEvent(DataEvent.RETRY,this)
    }

    private tNum:number = 1;
    private touchHandle(e:egret.TouchEvent){
        if(e.currentTarget ==this.startBut&&ConfigModel.getInstance().isShowPage == true){
            Global.dispatchEvent(DataEvent.REMOVESHOWSCENE,this);
            this.removeChild(this.startBut);
        }else{
            egret.Tween.get(this.box).to({alpha:0},1200);
            egret.Tween.get(this.boxtxt).to({alpha:0},1200);
            this.tNum++;
            if(this.tNum>7){
                this.tNum = 1;
            }
            ConfigModel.getInstance().idNum = this.tNum;
            this.setPage1(this.tNum);
        }
    }

    private headImgReady(){
        //if(this.isheadImgReady1 == true){
            this.setPage1(ConfigModel.getInstance().idNum);
        //}
    }

    public setPage1(num:number){
        this.showPage.setBitmapByName("p"+num);
        this.contTXT.setInfo(num);
        this.unameTXT.setInfo(num);
         this.uheadIMG.setHInfo(num);
        switch (num){
            case 1:
                this.contTXT.x = this.width/2;
                this.contTXT.anchorOffsetX = this.contTXT.width/2;
                this.contTXT.y = 420;

                this.unameTXT.y = 175;
                this.unameTXT.x = this.width/2;

                this.uheadIMG.x = this.width/2-2;
                this.uheadIMG.y = 83;
                break;
            case 2:
                this.contTXT.y = 530;
                this.contTXT.x = 100;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 430;
                this.unameTXT.x = 105;

                this.uheadIMG.x = 135;
                this.uheadIMG.y = 300;
                break;
            case 3:
                this.contTXT.y = 640;
                this.contTXT.x = 80;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 240;
                this.unameTXT.x = 540;

                this.uheadIMG.x = 460;
                this.uheadIMG.y = 131;
                break;
            case 4:
                this.contTXT.y = 150;
                this.contTXT.x = this.width - this.contTXT.width - 60;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 690;
                this.unameTXT.x = 280;

                this.uheadIMG.x = 280;
                this.uheadIMG.y = 552;
                break;
            case 5:
                this.contTXT.y = 230;
                this.contTXT.x = this.width - this.contTXT.width - 60;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 125;
                this.unameTXT.x = 240;

                this.uheadIMG.x = 133;
                this.uheadIMG.y = 125;
                break;
            case 6:
                this.contTXT.y = 740;
                this.contTXT.x = 75;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 370;
                this.unameTXT.x = 75;

                this.uheadIMG.x = 465;
                this.uheadIMG.y = 770;
                break;
            case 7:
                this.contTXT.y = 120;
                this.contTXT.x = this.width - this.contTXT.width - 60;
                this.contTXT.anchorOffsetX = 0;

                this.unameTXT.y = 600;
                this.unameTXT.x = 250;

                this.uheadIMG.x = 498;
                this.uheadIMG.y = 408;
                break;
        }
        ConfigModel.getInstance().updateShare1();
    }
}



