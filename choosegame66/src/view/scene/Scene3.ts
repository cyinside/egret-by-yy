class Scene3 extends DisplayScene{

    private bg:BitmapDisplay;
    private bg4:BitmapDisplay;
    private img:egret.Bitmap;
    private resultInfo:ResultInfo;
    private clickBtn:BitmapDisplay;
    private close:BitmapDisplay;

    public constructor(){
        super();
        this.initView();
    }

    private gameDiv1 = document.getElementById("TdDiv");
    private initView():void{
        this.width = 640;
        this.height = 1030;

        this.bg = new BitmapDisplay();
        this.bg.setBitmapByName("bg3");
        this.addChild(this.bg);
        this.setHorizontalCenter(this.bg);

        this.setFullScreen();

        this.setInfo();
    }


    private setInfo():void{
        this.resultInfo = QuestionModel.getInstance().getResultInfoByScore(QuestionModel.getInstance().userInfo.score);
        if(this.resultInfo){
            this.updateView();
        }

        JSSDK.getWeiXinShareAppMessage(2,QuestionModel.getInstance().wx_title,QuestionModel.getInstance().wx_share_link
            ,QuestionModel.getInstance().wx_share_img,this.resultInfo.text+QuestionModel.getInstance().wx_friend_desx);
        JSSDK.getWeiXinShareTimeline(2,this.resultInfo.text+QuestionModel.getInstance().wx_default_title,QuestionModel
            .getInstance().wx_share_link,QuestionModel.getInstance().wx_share_img);

        console.log(QuestionModel.getInstance().wx_title + QuestionModel.getInstance().wx_share_link + QuestionModel.getInstance().wx_friend_desx+this.resultInfo.text)
        console.log(QuestionModel.getInstance().wx_default_title);
    }
    private updateView():void{
        var url1:string = "resource/assets/role/" + "a"+this.resultInfo.id.toString() + ".jpg";
        var loader1:egret.URLLoader = new egret.URLLoader();
        loader1.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader1.addEventListener(egret.Event.COMPLETE,this.loadComplete1,this);
        loader1.load(new egret.URLRequest(url1));
    }

    private loadComplete1(event:egret.Event):void{
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        this.img = new egret.Bitmap(loader.data);
        this.setHorizontalCenter(this.img);
        this.setVerticalCenter(this.img);
        this.addChild(this.img);

        this.clickBtn = new BitmapDisplay();
        this.clickBtn.setBitmapByName("clickBtn");
        this.clickBtn.y = 40;
        this.clickBtn.x = 440;
        this.addChild(this.clickBtn);
        this.clickBtn.touchEnabled = true;
        this.clickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showBg4,this);

        this.bg4 = new BitmapDisplay();
        this.bg4.setBitmapByName("bg4");
        this.setHorizontalCenter(this.bg4);

        this.close = new BitmapDisplay();
        this.close.setBitmapByName("close");
        this.close.y = 30;
        this.close.x = 500;
        this.close.touchEnabled = true;
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeTips1,this);

        this.setFullScreen();

        var myImg:HTMLImageElement = document.createElement("img");
        //this.gameDiv1.style.width = "100%";
        //this.gameDiv1.style.height = "90%";
        //this.gameDiv1.style.position = "absolute";
        //this.gameDiv1.style.zIndex = "999";
        //this.gameDiv1.style.top = "75%";
        //this.gameDiv1.style.left = "0%";
        //this.gameDiv1.style.display = "none";
        this.gameDiv1.setAttribute("style","width:100%;position:absolute;z-index:999;top:75%;left:35%;display:none;");
        myImg.src ="resource/assets/img1.jpg";
        //myImg.style.width = "30%";
        myImg.setAttribute("style","width:30%;");

        this.gameDiv1.appendChild(myImg);

        this.tW();
    }

    private showBg4(){
        this.addChild(this.bg4);
        this.addChild(this.close);
        this.gameDiv1.style.display = "";
    }

    private removeTips1(){
        this.removeChild(this.bg4);
        this.removeChild(this.close);
        this.gameDiv1.style.display = "none";
    }

    private tW(){
        egret.Tween.get(this.clickBtn,{loop:true}).to({x:460},500,egret.Ease.backInOut).to({x:440},500,egret.Ease.backInOut);
    }

}