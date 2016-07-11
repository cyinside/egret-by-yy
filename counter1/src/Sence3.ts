/**
 * Created by cyy on 15/10/19.
 */
class Sence3 extends DisplayScene {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.createGameScene();
        this.tw();
    }

    private total:egret.TextField;
    private bg3:BitmapDisplay;
    private pb:BitmapDisplay;
    private pf:BitmapDisplay;
    private pbg:BitmapDisplay;
    private img:egret.Bitmap;
    private icon:BitmapDisplay;
    private but1:BitmapDisplay;
    private but2:BitmapDisplay;
    private bg4:BitmapDisplay;
    private rect1:egret.Shape;
    public totalNum:number = 0;
    private shareTXT:egret.TextField;
    private createGameScene(){
        this.width = 640;
        this.height  = 1040;

        this.bg3 = new BitmapDisplay();
        this.bg3.setBitmapByName("bg3");
        this.setHorizontalCenter(this.bg3);
        this.setVerticalCenter(this.bg3);
        this.addChild(this.bg3);

        this.pb = new BitmapDisplay();
        this.pb.setBitmapByName("pb");
        this.pb.x = this.setHorizontalCenter(this.pb).x+10;
        this.pb.y = 650;
        this.addChild(this.pb);

        this.pbg = new BitmapDisplay();
        this.pbg.setBitmapByName("pbg");
        this.pbg.x = -5;
        this.pbg.y = 600;
        this.addChild(this.pbg);

        this.pf = new BitmapDisplay();
        this.pf.setBitmapByName("pf");
        this.setHorizontalCenter(this.pf);
        this.pf.y = this.height-this.pf.height;
        this.addChild(this.pf);

        this.total = new egret.TextField;
        this.total.textColor = 0x000000;
        this.total.size = 70;
        this.total.y = 350;
        this.total.textAlign = egret.HorizontalAlign.CENTER;
        this.pbg.addChild(this.total);

        this.but1 = new BitmapDisplay;
        this.but1.setBitmapByName("but1");
        this.but1.x = this.setHorizontalCenter(this.but1).x - 150;
        this.but1.y = 920;
        this.but1.touchEnabled = true;
        this.addChild(this.but1);
        this.but1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.twin,this);

        this.but2 = new BitmapDisplay;
        this.but2.setBitmapByName("but2");
        this.but2.x = this.setHorizontalCenter(this.but2).x + 150;
        this.but2.y = 920;
        this.but2.touchEnabled = true;
        this.addChild(this.but2);
        this.but2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.share,this);

        this.bg4 = new BitmapDisplay();
        this.bg4.setBitmapByName("bg4");
        this.bg4.x = this.width;
        this.bg4.touchEnabled = true;
        this.setVerticalCenter(this.bg4);
        this.addChild(this.bg4);
        this.bg4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.twout,this);

        this.setFullScreen();
    }

    private tw(){
        egret.Tween.get(this.pbg).to({y:30},1800,egret.Ease.sineIn);
    }
    private twin(){
        egret.Tween.get(this.bg4).to({x:0},500,egret.Ease.backInOut);
    }
    private twout(){
        egret.Tween.get(this.bg4).to({x:this.width},500,egret.Ease.backInOut);
    }


    private share(){
        this.rect1 = new egret.Shape;
        this.rect1.graphics.beginFill(0x000000,0.5);
        this.rect1.graphics.drawRect(0,0,this.width,this.height);
        this.rect1.graphics.endFill();
        this.addChild(this.rect1);
        this.rect1.touchEnabled = true;
        this.rect1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeR,this);

        this.shareTXT = new egret.TextField;
        this.shareTXT.textColor = 0xFFFFFF;
        this.shareTXT.size = 30;
        this.shareTXT.y = 50;
        this.shareTXT.x = 140;
        this.shareTXT.text = "点击右上角   邀请朋友一起来玩";
        this.shareTXT.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.shareTXT);
    }

    private removeR(){
        this.removeChild(this.rect1);
        this.removeChild(this.shareTXT);
    }

    public getValue(txtArr:Array<Btninfo>){
        for(var i:number = 0;i<txtArr.length;i++){
            this.totalNum += txtArr[i]["value"];
            //if(i>0){
            //    this.list.text +="," + txtArr[i]["type"];
            //}else{
            //    this.list.text = txtArr[i]["type"];
            //}
        }
        this.getLev(this.totalNum);
        this.total.text = "¥"+this.totalNum.toString();
        this.total.anchorOffsetX = this.total.width/2;
        this.total.x = 320;

        var x:number = 0;
        var y:number = 0;
        for(var j:number = 0;j<12;j++){
            var imgUrl:string = txtArr[j]["img"];
            this.icon = new BitmapDisplay;
            this.icon.load(imgUrl);
            this.icon.scaleX = this.icon.scaleY = 1.5;
            this.icon.x = 200;
            this.icon.y = 160;
            this.pbg.addChild(this.icon);
            if(j % 6 == 0){
                x = 0;
                if(j > 0){
                    y += 40;
                }
            }
            this.icon.x += x;
            this.icon.y += y;
            x += 40;
        }
    }

    private getLev(totalNum:number){
        if(totalNum<30000){
            var scoreinfo:ScoreInfo = ConfigModel.getInstance().getLevelByScore(1);
        }else if(totalNum>30000 && totalNum<100000){
            var scoreinfo:ScoreInfo =  ConfigModel.getInstance().getLevelByScore(2);
        }else if(totalNum>100000 && totalNum<200000){
            var scoreinfo:ScoreInfo =  ConfigModel.getInstance().getLevelByScore(3);
        }else if(totalNum>200000){
            var scoreinfo:ScoreInfo =  ConfigModel.getInstance().getLevelByScore(4);
        }

        var url1:string = "resource/assets/sence3/a" + scoreinfo.id.toString() + ".png";
        var loader1:egret.URLLoader = new egret.URLLoader();
        loader1.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader1.addEventListener(egret.Event.COMPLETE,this.loadComplete1,this);
        loader1.load(new egret.URLRequest(url1));

        JSSDK.getWeiXinShareTimeline(2,ConfigModel.getInstance().wx_default_title,ConfigModel.getInstance().wx_link,ConfigModel.getInstance().wx_share_img);
        JSSDK.getWeiXinShareAppMessage(2,ConfigModel.getInstance().wx_default_title,ConfigModel.getInstance().wx_link,ConfigModel.getInstance().wx_share_img,scoreinfo.text);
        console.log(ConfigModel.getInstance().wx_default_title,ConfigModel.getInstance().wx_link,ConfigModel.getInstance().wx_share_img,scoreinfo.text)
    }

    private loadComplete1(event:egret.Event):void{
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        this.img = new egret.Bitmap(loader.data);
        this.img.y = 480;
        this.img.x = 150;
        this.pbg.addChild(this.img);
    }



}