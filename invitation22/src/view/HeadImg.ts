/**
 * Created by cyy on 16/3/29.
 */
class HeadImg extends DisplayScene {
    public constructor() {
        super();
        this.createScnen();
    }

    private uheadImg:BitmapDisplay;
    private mask1:BitmapDisplay;
    private createScnen(){
        this.mask1 = new BitmapDisplay();
        this.mask1.setBitmapByName("mask1");
        this.mask1.anchorOffsetX = this.mask1.width/2;
        this.mask1.anchorOffsetY = this.mask1.height/2;
        this.addChild(this.mask1);


        this.uheadImg = new BitmapDisplay;
        this.addChild(this.uheadImg);

        var image = document.getElementById("img1");
        //image["src"] = ConfigModel.getInstance().headUrl;
        image["src"] = "http://www.joyoungfeld-ad.com/zhaoyang/animation/invitation2/shareIcon.jpg";
        image.addEventListener("load",function(event) {
            Global.dispatchEvent(DataEvent.loadcomp);
        },false);

        Global.addEventListener(DataEvent.loadcomp,this.loadComple,this);
        //alert(__global.headimgurl);
    }

    private loadComple(){
        var image = document.getElementById("img1");
        var texture:egret.Texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg.setBitmapByTexture(texture);
        this.uheadImg.anchorOffsetX = this.uheadImg.width/2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height/2;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;

        this.uheadImg.mask = this.mask1;
        Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    }
    private loadComple1(){
        var image = document.getElementById("img2");
        var texture:egret.Texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg.setBitmapByTexture(texture);
        this.uheadImg.anchorOffsetX = this.uheadImg.width/2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height/2;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;

        this.uheadImg.mask = this.mask1;
        Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    }

    public updateImg(){
        var image = document.getElementById("img2");
        image["src"] = ConfigModel.getInstance().headUrl;
        console.log(ConfigModel.getInstance().headUrl);
        image.addEventListener("load",function(event) {
            Global.dispatchEvent(DataEvent.loadcomp);
        },false);

        Global.addEventListener(DataEvent.loadcomp,this.loadComple1,this);
    }

    public setHInfo(id:number){
        switch (id){
            case 1:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 185/this.uheadImg.width;
                break;
            case 2:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 185/this.uheadImg.width;
                break;
            case 3:
                this.mask1.scaleX = this.mask1.scaleY = 1.15;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 165/this.uheadImg.width;
                break;
            case 4:
                this.mask1.scaleX = this.mask1.scaleY = 1.6;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 265/this.uheadImg.width;
                break;
            case 5:
                this.mask1.scaleX = this.mask1.scaleY = 1.45;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 215/this.uheadImg.width;
                break;
            case 6:
                this.mask1.scaleX = this.mask1.scaleY = 1.5;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 240/this.uheadImg.width;
                break;
            case 7:
                this.mask1.scaleX = this.mask1.scaleY = 1.7;
                this.uheadImg.scaleX = this.uheadImg.scaleY = 265/this.uheadImg.width;
                break;
        }
    }
}