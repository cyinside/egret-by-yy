/**
 * Created by cyy on 16/4/7.
 */
class Scene2 extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private bg:BitmapDisplay;
    public uheadIMG:HeadImg;
    private contTXT:egret.TextField;
    private infoBut:BitmapDisplay;
    private urlBut:BitmapDisplay;
    private infoPage1:BitmapDisplay;
    private remove:BitmapDisplay;
    private createScnen() {
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay("bg3");
        this.addChild(this.bg);

        this.uheadIMG = new HeadImg;
        this.addChild(this.uheadIMG);
        this.uheadIMG.x = this.width/2;
        this.uheadIMG.y = 127;

        this.contTXT = new egret.TextField;
        this.contTXT.y = 315;
        this.addChild(this.contTXT);
        this.setFullScreen();

        this.infoBut = new BitmapDisplay("infoBut");
        this.setHorizontalCenter(this.infoBut);
        this.infoBut.y = 900;
        this.infoBut.touchEnabled = true;
        this.infoBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showInfoPage,this);
        this.addChild(this.infoBut);

        this.infoPage1 = new BitmapDisplay("infoPage");
        this.infoPage1.anchorOffsetX = this.infoPage1.width/2;
        this.infoPage1.anchorOffsetY = this.infoPage1.height/2;
        this.infoPage1.x = this.width/2;
        this.infoPage1.y = this.height/2;
        this.infoPage1.scaleX = this.infoPage1.scaleY =0;
        this.addChild(this.infoPage1);

        this.urlBut = new BitmapDisplay("gpsBut");
        this.setHorizontalCenter(this.urlBut);
        this.urlBut.touchEnabled = true;
        this.urlBut.y = 935;
        this.infoPage1.addChild(this.urlBut);
        this.urlBut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.gotoUrl,this);

        this.remove = new BitmapDisplay("remove");
        this.remove.touchEnabled = true;
        this.remove.y = 20;
        this.remove.x = this.width-this.remove.width - 40;
        this.infoPage1.addChild(this.remove);
        this.remove.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hideInfoPage,this);

        ConfigModel.getInstance().updateShare1();
    }

    public setText1(){
        this.contTXT.text = ConfigModel.getInstance().contTxt;
        this.contTXT.anchorOffsetX = this.contTXT.width/2;
        this.contTXT.x = this.width/2;
    }

    private gotoUrl(){
        window.location.href="http://map.baidu.com/mobile/webapp/search/search/qt=s&wd=保利国际广场北塔中心园林处&c=257&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&src=0/vt=map&ecom=0";
    }

    private showInfoPage(){
        egret.Tween.get(this.infoPage1).to({scaleX:1,scaleY:1},800,egret.Ease.backInOut);
    }

    private hideInfoPage(){
        egret.Tween.get(this.infoPage1).to({scaleX:0,scaleY:0},800,egret.Ease.backInOut);
    }
}

