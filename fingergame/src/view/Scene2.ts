/**
 * Created by cyy on 15/12/7.
 */
class Scene2 extends DisplayScene {
    public constructor() {
        super();
        this.createScene();
    }

    private bg2:BitmapDisplay;
    private snow1:BitmapDisplay;
    private snow2:BitmapDisplay;
    private star:BitmapDisplay;
    private startxt:BitmapDisplay;
    private txt3:BitmapDisplay;
    private infobut:BitmapDisplay;
    private infoimg:BitmapDisplay;
    //public isplay:Boolean = false;
    private createScene() {
        this.width = 640;
        this.height = 1030;


        this.bg2 = new BitmapDisplay;
        this.bg2.setBitmapByName("bg2");
        this.setHorizontalCenter(this.bg2);
        this.setVerticalCenter(this.bg2);
        this.addChild(this.bg2);

        this.snow1 = new BitmapDisplay;
        this.snow1.setBitmapByName("snow1");
        this.setHorizontalCenter(this.snow1);
        this.snow1.y = 100;
        this.snow1.scaleX = this.snow1.scaleY = 1.2;
        this.addChild(this.snow1);

        this.snow2 = new BitmapDisplay;
        this.snow2.setBitmapByName("snow2");
        this.setHorizontalCenter(this.snow2);
        this.snow2.y = 600;
        this.snow1.scaleX = this.snow1.scaleY = 1;
        this.addChild(this.snow2);

        this.star = new BitmapDisplay;
        this.star.setBitmapByName("star");
        this.star.anchorOffsetX = this.star.width/2;
        this.star.anchorOffsetY = this.star.height/2;
        this.star.x = this.width/2;
        this.star.y = 310;
        this.star.rotation = 0;
        this.star.touchEnabled = true;
        this.addChild(this.star);
        this.star.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tw2,this);

        this.infobut = new BitmapDisplay;
        this.infobut.setBitmapByName("infobut");
        this.infobut.anchorOffsetX = this.infobut.width/2;
        this.infobut.anchorOffsetY = this.infobut.height/2;
        this.infobut.scaleX = this.infobut.scaleY = 0.8;
        this.infobut.x = this.width/2;
        this.infobut.y = 485;
        this.infobut.touchEnabled = true;
        this.addChild(this.infobut);
        this.infobut.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showInfo,this);

        this.infoimg = new BitmapDisplay;
        this.infoimg.setBitmapByName("infoimg");
        this.infoimg.anchorOffsetX = this.infoimg.width/2;
        this.infoimg.anchorOffsetY = this.infoimg.height/2;
        this.infoimg.x = this.width/2;
        this.infoimg.y = 500;
        this.infoimg.touchEnabled = true;
        this.infoimg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeInfo,this);

        this.startxt = new BitmapDisplay;
        this.startxt.setBitmapByName("startxt");
        this.setHorizontalCenter(this.startxt);
        this.startxt.y = 260;
        //this.addChild(this.startxt);
        //this.startxt.touchEnabled = true;
        //this.startxt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tw2,this);

        this.txt3 = new BitmapDisplay;
        this.txt3.setBitmapByName("txt3");
        this.setHorizontalCenter(this.txt3);
        this.txt3.y = 50;
        //this.addChild(this.txt3);

        this.tw1();

        this.setFullScreen();

        JSSDK.getWeiXinShareAppMessage(2,ConfigModel.wx_title,ConfigModel.link,
            ConfigModel.imgURL,ConfigModel.getUserName()+ConfigModel.wx_desc);
        JSSDK.getWeiXinShareTimeline(2,ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);
        console.log(ConfigModel.wx_title,ConfigModel.link, ConfigModel.imgURL);
    }

    private tw1(){
        egret.Tween.get(this.snow1,{loop:true}).to({alpha:0},1000).wait(800).to({alpha:1},1000);
        egret.Tween.get(this.snow2,{loop:true}).to({alpha:0},1000).wait(400).to({alpha:1},1000);

        egret.Tween.get(this.star,{loop:true}).to({scaleX:1.1,scaleY:1.1},1000).to({scaleX:1,scaleY:1},1000);
    }

    private tw2(){
        //egret.Tween.removeTweens(this.star);
        //this.star.touchEnabled = false;

        egret.Tween.get(this.star).to({scaleX:1.3,scaleY:1.3},1000);
        //egret.Tween.get(this.star).to({rotation:180},400).to({rotation:0},400).call(this.gotoScene3,this);
        //奖品结果
        //__global.onGetPrize(this.getPrizeCallback);
        this.getPrizeCallback(999);
    }
    //
    private getPrizeCallback(tmpdata)
    {
        var num = eval(tmpdata);
        var pagenum = 0;
        if(parseInt(num)==2)
        {
            //alert("22222");
            //this.gotoS3(2);
            pagenum = 2;
        }else if(parseInt(num) == 99)
        {
            //alert("999999999");
            //this.gotoS3(3);
            pagenum = 3;
        }else
        {
            //alert("1111111");
            //this.gotoS3(1);
            pagenum = 1 ;
        }

        //var tmpevent:egret.Event = new egret.Event(DataEvent.GOTO_SCENE3);
        Global.dispatchEvent(DataEvent.GOTO_SCENE3,pagenum);
    }

    private showInfo(){
        this.addChild(this.infoimg);
    }

    private removeInfo(){
        this.removeChild(this.infoimg);
    }

    //private gotoS3(value){
    //    var dataEvent:DataEvent = new DataEvent(DataEvent.GOTO_SCENE3);
    //    var obj = new Object;
    //    obj['value'] = value;
    //    alert(value);
    //    dataEvent.data = obj;
    //    this.dispatchEvent(dataEvent);
    //    //alert("lalalala");
    //}



}
