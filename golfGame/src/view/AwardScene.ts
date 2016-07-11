/**
 * Created by Administrator on 2016/7/8.
 */
class AwardScene extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private award1:BitmapDisplay;
    private award2:BitmapDisplay;
    private awardText1:egret.TextField;
    private awardText2:egret.TextField;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("awardBg");
        this.addChild(this.bg1);

        this.award1 = new BitmapDisplay;
        this.award1.setBitmapByName("no_receive");
        this.award1.y = 400;
        this.award1.x = this.width/2-this.award1.width-50;
        this.award1.touchEnabled = false;
        this.addChild(this.award1);

        this.award2 = new BitmapDisplay;
        this.award2.setBitmapByName("no_receive");
        this.award2.y = 400;
        this.award2.x = this.width/2+50;
        this.award2.touchEnabled = false;
        this.addChild(this.award2);

        this.awardText1 = new egret.TextField();
        this.awardText1.x = this.award1.x+60;
        this.awardText1.y = this.award1.y+100;
        this.addChild(this.awardText1);

        this.awardText2 = new egret.TextField();
        this.awardText2.x = this.award2.x+60;
        this.awardText2.y = this.award2.y+100;
        this.addChild(this.awardText2);

        DataModel.getInstance().onTouchHandle2();
        Global.addEventListener(DataEvent.DATACOMPLETE1,this.setAward,this);
        this.award1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.award2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
    }

    public setFull(){
        this.setFullScreen();
    }

    private setAward(){
        var arrLength:number = DataModel.awordArr.length;
        if(arrLength!=0){
            switch (arrLength){
                case 1:
                    this.awardText1.text = DataModel.awordArr[0].aword;
                    this.award1.touchEnabled = true;

                    if(DataModel.awordArr[0].isreceive==0){
                        this.award1.setBitmapByName("is_receive");
                        this.award1.touchEnabled = true;
                    }else{
                        this.award1.setBitmapByName("no_receive");
                        this.award1.touchEnabled = false;
                    }
                    break;
                case 2:
                    this.awardText1.text = DataModel.awordArr[0].aword;
                    this.awardText2.text = DataModel.awordArr[1].aword;
                    this.award1.touchEnabled = true;
                    this.award2.touchEnabled = true;

                    if(DataModel.awordArr[0].isreceive==0){
                        this.award1.setBitmapByName("is_receive");
                        this.award1.touchEnabled = true;
                    }else if(DataModel.awordArr[0].isreceive==1){
                        this.award1.setBitmapByName("no_receive");
                        this.award1.touchEnabled = false;
                    }
                    if(DataModel.awordArr[1].isreceive==0){
                        this.award2.setBitmapByName("is_receive");
                        this.award2.touchEnabled = true;
                    }else if(DataModel.awordArr[1].isreceive==1){
                        this.award2.setBitmapByName("no_receive");
                        this.award2.touchEnabled = false;
                    }
                    break;
            }
        }
    }

    private touchHandle(e:egret.TouchEvent){
        var confirm = window.confirm("是否确定兑换该体验券？（请在工作人员指引下兑换此券，确认使用后此电子券将作废。）");
        if(confirm==true){
            switch (e.currentTarget){
                case this.award1:
                    DataModel.awardName=this.awardText1.text;
                    DataModel.getInstance().onTouchHandle3(1);
                    break;
                case this.award2:
                    DataModel.awardName=this.awardText2.text;
                    DataModel.getInstance().onTouchHandle3(2);
                    break;
            }
        }else{
            return;
        }
        Global.addEventListener(DataEvent.DATACOMPLETE2, this.setAward2,this);
    }

    private setAward2(e){
        switch (e.param.awardID){
            case 1:
                this.award1.setBitmapByName("no_receive");
                this.award1.touchEnabled = false;
                DataModel.getInstance().onTouchHandle2();
                break;
            case 2:
                this.award2.setBitmapByName("no_receive");
                this.award2.touchEnabled = false;
                DataModel.getInstance().onTouchHandle2();
                break;
        }
    }

    private removeThis(){
        Global.dispatchEvent(DataEvent.REMOVEAWARD,this);
    }
}
