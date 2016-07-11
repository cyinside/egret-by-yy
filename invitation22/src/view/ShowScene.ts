/**
 * Created by cyy on 16/3/29.
 */
class ShowScene extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    public showPage:BitmapDisplay;
    public unameTXT:NameView;
    public uheadIMG:HeadImg;
    private startBut:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        var url1:string = "resource/assets/p"+ConfigModel.getInstance().idNum+"/"+ConfigModel.getInstance().idNum+ConfigModel.getInstance().typeNum+".jpg";
        this.showPage = new BitmapDisplay;
        this.showPage.load(url1);
        this.addChildByScroller(this.showPage);

        this.unameTXT = new NameView;
        this.addChildByScroller(this.unameTXT);

        this.uheadIMG = new HeadImg;
        this.addChildByScroller(this.uheadIMG);

        this.startBut = new BitmapDisplay("startbut1");
        this.startBut.y = 860;
        this.setHorizontalCenter(this.startBut);
        this.startBut.touchEnabled = true;
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
         this.addChildByScroller(this.startBut);
         egret.Tween.get(this.startBut,{loop:true}).to({alpha:0},1200,egret.Ease.sineIn).to({alpha:1},600,egret.Ease.sineIn).wait(500);

        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.HEADIMGCOMP,this.headImgReady,this);
        Global.addEventListener(DataEvent.GOTOSCENE2,this.headImgReady,this);

    }

    private touchHandle(e:egret.TouchEvent){
            Global.dispatchEvent(DataEvent.REMOVESHOWSCENE,this);
            this.removeChildByScroller(this.startBut);
    }

    private headImgReady(){
        this.setPage1(ConfigModel.getInstance().idNum);
    }

    public setPage1(num:number){

        this.unameTXT.setInfo(num);
        this.uheadIMG.setHInfo(num);
        switch (num){
            case 1:
                this.unameTXT.y = 700;
                this.unameTXT.x = 30;

                this.uheadIMG.x = 116;
                this.uheadIMG.y = 590;
                break;
            case 2:

                this.unameTXT.y = 230;
                this.unameTXT.x = this.width-146;

                this.uheadIMG.x = this.width-136;
                this.uheadIMG.y = 123;
                break;
            case 3:
                this.unameTXT.y = 140;
                this.unameTXT.x = 370;

                this.uheadIMG.x = 460;
                this.uheadIMG.y = 141;
                break;
        }
        ConfigModel.getInstance().updateShare1();
    }
}



