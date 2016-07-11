/**
 * Created by cyy on 16/4/5.
 */
/**
 * Created by cyy on 16/3/29.
 */
class Scene22 extends DisplayScrollerScene {
    public constructor() {
        super();
        this.createScnen();
    }

    public showPage1:UIBitmapDisplay;
    public showPage2:UIBitmapDisplay;
    public showPage3:UIBitmapDisplay;
    public unameTXT:NameView;
    public uheadIMG:HeadImg;
    public retryBut:BitmapDisplay;
    public box:egret.Shape;
    public boxtxt:egret.TextField;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.showPage1 = new UIBitmapDisplay;
        this.showPage2 = new UIBitmapDisplay;
        this.showPage3 = new UIBitmapDisplay;
        this.showPage1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.showPage2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.showPage3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandle,this);
        this.showPage1.touchEnabled = true;
        this.showPage2.touchEnabled = true;
        this.showPage3.touchEnabled = true;

        this.unameTXT = new NameView;
        this.addChildByScrollerAt(this.unameTXT,2);

        this.uheadIMG = new HeadImg;
        this.addChildByScrollerAt(this.uheadIMG,2);

        this.box = new egret.Shape;
        this.box.graphics.beginFill(0x000000,0.5);
        this.box.graphics.drawRect(0,0,this.width,60);
        this.box.graphics.endFill();
        this.addChildByScrollerAt(this.box,3);

        this.boxtxt = new egret.TextField;
        this.boxtxt.text = "点击屏幕变换样式，右上角分享邀请函";
        this.boxtxt.size = 23;
        this.boxtxt.alpha = 0;
        this.boxtxt.textColor = 0xFFFFFF;
        this.boxtxt.anchorOffsetX = this.boxtxt.width/2;
        this.boxtxt.x = this.width/2;
        this.boxtxt.y = 20;
        this.addChildByScrollerAt(this.boxtxt,4);


        this.retryBut = new BitmapDisplay("retryBut");
        this.retryBut.x = this.width;
        this.retryBut.y = 950;
        this.retryBut.touchEnabled = true;
        this.addChildByScrollerAt(this.retryBut,2);
        this.retryBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.retry,this);

        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.HEADIMGCOMP,this.headImgReady,this);
        Global.addEventListener(DataEvent.GOTOSCENE2,this.headImgReady,this);
    }

    public setpage(){
        var url1:string = "resource/assets/p1/"+1+ConfigModel.getInstance().typeNum+".jpg";
        var url2:string = "resource/assets/p2/"+2+ConfigModel.getInstance().typeNum+".jpg";
        var url3:string = "resource/assets/p3/"+3+ConfigModel.getInstance().typeNum+".jpg";
        this.showPage1.load(url1);

        this.showPage2.load(url2);

        this.showPage3.load(url3);
    }

    private retry(){
        Global.dispatchEvent(DataEvent.RETRY,this)
    }

    private tNum:number = 1;
    private touchHandle(e:egret.TouchEvent){
            egret.Tween.get(this.box).to({alpha:0},1200);
            egret.Tween.get(this.boxtxt).to({alpha:0},1200);
            this.tNum++;
            if(this.tNum>3){
                this.tNum = 1;
            }
            ConfigModel.getInstance().idNum = this.tNum;
            this.setPage1(this.tNum);
            console.log(this.tNum)
    }

    private headImgReady(){
        this.setPage1(ConfigModel.getInstance().idNum);
    }

    public setPage1(num:number){
        this.unameTXT.setInfo(num);
        this.uheadIMG.setHInfo(num);
        switch (num) {
            case 1:
                this.addChildByScrollerAt(this.showPage1,1);
                if(this.contains(this.showPage2)){
                    this.removeChildByScroller(this.showPage2);
                }else if(this.contains(this.showPage3)){
                    this.removeChildByScroller(this.showPage3);
                }

                this.unameTXT.y = 700;
                this.unameTXT.x = 30;

                this.uheadIMG.x = 116;
                this.uheadIMG.y =590;
                break;

            case 2:{
                this.addChildByScrollerAt(this.showPage2,1);
                if(this.contains(this.showPage1)){
                    this.removeChildByScroller(this.showPage1);
                }else if(this.contains(this.showPage3)){
                    this.removeChildByScroller(this.showPage3);
                }


                this.unameTXT.y = 230;
                this.unameTXT.x = this.width-146;

                this.uheadIMG.x = this.width-136;
                this.uheadIMG.y = 123;
                break;
            }

            case 3:{
                this.addChildByScrollerAt(this.showPage3,1);
                if(this.contains(this.showPage1)){
                    this.removeChildByScroller(this.showPage1);
                }else if(this.contains(this.showPage2)){
                    this.removeChildByScroller(this.showPage2);
                }

                this.unameTXT.y = 140;
                this.unameTXT.x = 370;

                this.uheadIMG.x = 460;
                this.uheadIMG.y = 141;
                break;
            }
        }
        ConfigModel.getInstance().updateShare1();
    }
}



