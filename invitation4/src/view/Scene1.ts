/**
 * Created by cyy on 15/11/13.
 */
class Scene1 extends DisplayScrollerScene{
    public constructor(){
        super();
        this.createScnen();
    }

    private bg1:UIBitmapDisplay;
    private headImg:HeadImg1;
    private headImg1:HeadImg1;
    private senterName:egret.TextField;
    private getterName:egret.TextField;
    private startBut:BitmapDisplay;
    private createScnen(){
        this.width = 640;
        this.height = 1030;

        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p"+ConfigModel.getInstance().idNum);
        this.group.addChild(this.bg1);

        this.headImg = new HeadImg1(2);
        this.headImg.y = 905;
        this.headImg.x = 300;
        this.group.addChild(this.headImg);

        this.headImg1 = new HeadImg1(1);
        this.headImg1.y = 85;
        this.headImg1.x = 125;
        this.group.addChild(this.headImg1);

        this.senterName = new egret.TextField;
        this.senterName.size = 30;
        this.senterName.y = 935;
        this.senterName.x = 360;
        this.senterName.text = ConfigModel.getInstance().uNameTxt1;
        this.group.addChild(this.senterName);

        this.getterName = new egret.TextField;
        this.getterName.size = 30;
        this.getterName.y = 65;
        this.getterName.x = 245;
        this.getterName.text = ConfigModel.getInstance().uNameTxt;
        this.group.addChild(this.getterName);

        if(ConfigModel.getInstance().idNum==1||ConfigModel.getInstance().idNum==3){
            this.senterName.textColor = 0x000000;
            this.getterName.textColor = 0x000000;
        }else{
            this.senterName.textColor = 0xFFFFFF;
            this.getterName.textColor = 0xFFFFFF;
        }

        this.startBut = new BitmapDisplay("startBut");
        this.group.addChild(this.startBut);
        this.startBut.anchorOffsetX = this.startBut.width/2;
        this.startBut.anchorOffsetY = this.startBut.height/2;
        this.startBut.x = 120;
        this.startBut.y = 940;

        this.setFullScreen();
        this.setViewRect();

        Global.addEventListener(DataEvent.HEADIMGCOMP,this.headImgCom,this);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);

        egret.Tween.get(this.startBut,{loop:true}).to({alpha:0},1200,egret.Ease.sineInOut).to({alpha:1},1200,egret.Ease.sineInOut)
    }

    private headImgCom(){
        //this.group.addChild(this.headImg);
        //this.group.addChild(this.headImg1);
    }

    private touchHandle(){
        var event:DataEvent = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 2;
        Global.dispatchEvent(DataEvent.GOTO_SCENE,event);
    }

}