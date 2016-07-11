/**
 * Created by Administrator on 2016/7/8.
 */
class GetPrizeScene extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private prizeBut:BitmapDisplay;
    private infoView:InfoView;
    private infoBut:BitmapDisplay;
    private awardView:AwardScene;
    private removeBut:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("getPrizeBg");
        this.addChild(this.bg1);

        this.prizeBut= new BitmapDisplay("getPrizeBut");
        this.prizeBut.y = 740;
        this.prizeBut.x = 275;
        this.prizeBut.touchEnabled = true;
        this.prizeBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getPrizeHandle,this);
        this.addChild(this.prizeBut);

        this.infoView = new InfoView;

        this.infoBut = new BitmapDisplay;
        this.infoBut.touchEnabled = true;

        this.awardView = new AwardScene;

        this.removeBut = new BitmapDisplay("removeBut");
        this.removeBut.x = this.width-this.removeBut.width-50;
        this.removeBut.y = 50;
        this.removeBut.touchEnabled = true;
        this.removeBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeAward,this);

        this.setFullScreen();
        Global.addEventListener(DataEvent.REMOVEAWARD1,this.removeAward,this)
    }

    private getPrizeHandle(){
        this.prizeBut.touchEnabled=false;
        DataModel.getInstance().onTouchHandle();
        Global.addEventListener(DataEvent.DATACOMPLETE,this.prizeDataHandle,this)
    }

    private prizeDataHandle(){
        if(DataModel.prizeWord!==""&&DataModel.prizeWord!=="0"){
            this.infoView.setInfo(5,this);
            this.addChild(this.infoView);
            alert("中奖："+DataModel.prizeWord);

            this.infoBut.setBitmapByName("awardBut");
            this.infoBut.y = 600;
            this.infoBut.name = "1";
            this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle1,this);
        }else if(DataModel.prizeWord=="0"){
            this.infoView.setInfo(4,this);
            this.addChild(this.infoView);

            this.infoBut.setBitmapByName("retryBut");
            this.infoBut.y = 600;
            this.infoBut.name = "2";
            this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle1,this);
        }
        this.addChild(this.infoBut);
        this.setHorizontalCenter(this.infoBut);
    }

    private touchHandle1(e:egret.TouchEvent){
        switch (e.target.name){
            case "1":
                this.is_prize();
                break;
            case "2":
                this.no_prize();
                break;
        }
    }

    private is_prize(){
        //console.log("")
        //this.reset();
        DataModel.getInstance().onTouchHandle2();
        this.addChild(this.awardView);
        this.addChild(this.removeBut);
    }

    private no_prize(){
        this.reset();
        SceneUtil.changeScene(2);
    }

    private reset(){
        this.prizeBut.touchEnabled = true;
        this.removeChild(this.infoView);
        this.removeChild(this.infoBut);
    }

    private removeAward(){
        this.removeChild(this.awardView);
        this.removeChild(this.removeBut);
    }
}