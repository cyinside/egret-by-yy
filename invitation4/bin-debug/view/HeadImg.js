/**
 * Created by cyy on 16/3/29.
 */
var HeadImg = (function (_super) {
    __extends(HeadImg, _super);
    function HeadImg() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=HeadImg,p=c.prototype;
    p.createScnen = function () {
        this.mask1 = new BitmapDisplay();
        this.mask1.setBitmapByName("mask");
        this.mask1.anchorOffsetX = this.mask1.width / 2;
        this.mask1.anchorOffsetY = this.mask1.height / 2;
        this.addChild(this.mask1);
        this.mask2 = new BitmapDisplay();
        this.mask2.setBitmapByName("mask");
        this.mask2.anchorOffsetX = this.mask2.width / 2;
        this.mask2.anchorOffsetY = this.mask2.height / 2;
        this.addChild(this.mask2);
        this.mask3 = new BitmapDisplay();
        this.mask3.setBitmapByName("mask");
        this.mask3.anchorOffsetX = this.mask3.width / 2;
        this.mask3.anchorOffsetY = this.mask3.height / 2;
        this.addChild(this.mask3);
        this.mask4 = new BitmapDisplay();
        this.mask4.setBitmapByName("mask");
        this.mask4.anchorOffsetX = this.mask4.width / 2;
        this.mask4.anchorOffsetY = this.mask4.height / 2;
        this.addChild(this.mask4);
        this.uheadImg = new BitmapDisplay;
        this.addChild(this.uheadImg);
        this.uheadImg1 = new BitmapDisplay;
        this.addChild(this.uheadImg1);
        this.uheadImg2 = new BitmapDisplay;
        this.addChild(this.uheadImg2);
        this.uheadImg3 = new BitmapDisplay;
        this.addChild(this.uheadImg3);
        Global.addEventListener(DataEvent.loadcomp, this.loadComple, this);
        Global.addEventListener(DataEvent.loadcomp1, this.loadComple1, this);
        Global.addEventListener(DataEvent.loadcomp2, this.loadComple2, this);
        Global.addEventListener(DataEvent.loadcomp3, this.loadComple3, this);
    };
    p.updateImg = function (num) {
        switch (num) {
            case 1:
                this.addChild(this.uheadImg);
                var image = document.getElementById("img1");
                image["src"] = ConfigModel.getInstance().headUrl;
                console.log(ConfigModel.getInstance().headUrl);
                image.addEventListener("load", function (event) {
                    Global.dispatchEvent(DataEvent.loadcomp);
                }, false);
                break;
            case 2:
                this.addChild(this.uheadImg1);
                var image1 = document.getElementById("img2");
                image1["src"] = ConfigModel.getInstance().headUrl1;
                console.log(ConfigModel.getInstance().headUrl1);
                image1.addEventListener("load", function (event) {
                    Global.dispatchEvent(DataEvent.loadcomp1);
                }, false);
                break;
            case 3:
                this.addChild(this.uheadImg2);
                var image1 = document.getElementById("img3");
                image1["src"] = ConfigModel.getInstance().headUrl;
                console.log(ConfigModel.getInstance().headUrl);
                image1.addEventListener("load", function (event) {
                    Global.dispatchEvent(DataEvent.loadcomp2);
                }, false);
                break;
            case 4:
                this.addChild(this.uheadImg3);
                var image1 = document.getElementById("img4");
                image1["src"] = ConfigModel.getInstance().headUrl1;
                console.log(ConfigModel.getInstance().headUrl1);
                image1.addEventListener("load", function (event) {
                    Global.dispatchEvent(DataEvent.loadcomp3);
                }, false);
                break;
        }
    };
    p.loadComple = function () {
        var image = document.getElementById("img1");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg.setBitmapByTexture(texture);
        this.uheadImg.anchorOffsetX = this.uheadImg.width / 2;
        this.uheadImg.anchorOffsetY = this.uheadImg.height / 2;
        this.uheadImg.scaleX = this.uheadImg.scaleY = 200 / this.uheadImg.width;
        this.mask1.x = this.uheadImg.x;
        this.mask1.y = this.uheadImg.y;
        this.uheadImg.mask = this.mask1;
        //Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    };
    p.loadComple1 = function () {
        var image = document.getElementById("img2");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg1.setBitmapByTexture(texture);
        this.uheadImg1.anchorOffsetX = this.uheadImg1.width / 2;
        this.uheadImg1.anchorOffsetY = this.uheadImg1.height / 2;
        this.uheadImg1.scaleX = this.uheadImg1.scaleY = 200 / this.uheadImg1.width;
        this.mask2.x = this.uheadImg1.x;
        this.mask2.y = this.uheadImg1.y;
        this.uheadImg1.mask = this.mask2;
        //Global.dispatchEvent(DataEvent.HEADIMGCOMP);
    };
    p.loadComple2 = function () {
        var image = document.getElementById("img3");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg2.setBitmapByTexture(texture);
        this.uheadImg2.anchorOffsetX = this.uheadImg2.width / 2;
        this.uheadImg2.anchorOffsetY = this.uheadImg2.height / 2;
        this.uheadImg2.scaleX = this.uheadImg2.scaleY = 200 / this.uheadImg2.width;
        this.mask3.x = this.uheadImg2.x;
        this.mask3.y = this.uheadImg2.y;
        this.uheadImg2.mask = this.mask3;
        //Global.dispatchEvent(DataEvent.HEADIMGCOMP1);
    };
    p.loadComple3 = function () {
        var image = document.getElementById("img4");
        var texture = new egret.Texture();
        texture._setBitmapData(image);
        this.uheadImg3.setBitmapByTexture(texture);
        this.uheadImg3.anchorOffsetX = this.uheadImg3.width / 2;
        this.uheadImg3.anchorOffsetY = this.uheadImg3.height / 2;
        this.uheadImg3.scaleX = this.uheadImg3.scaleY = 200 / this.uheadImg3.width;
        this.mask4.x = this.uheadImg3.x;
        this.mask4.y = this.uheadImg3.y;
        this.uheadImg3.mask = this.mask4;
    };
    return HeadImg;
}(DisplayScene));
egret.registerClass(HeadImg,'HeadImg');
//# sourceMappingURL=HeadImg.js.map