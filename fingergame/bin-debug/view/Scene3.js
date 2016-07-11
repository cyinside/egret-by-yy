var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
/**
 * Created by cyy on 15/12/7.
 */
var Scene3 = (function (_super) {
    __extends(Scene3, _super);
    function Scene3() {
        _super.call(this);
        this.gameDiv = document.getElementById("gameDiv");
        this.myImg = document.createElement("img");
    }
    var d = __define,c=Scene3;p=c.prototype;
    p.createScene = function (value) {
        this.gameDiv.style.width = "100%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "75%";
        this.gameDiv.style.left = "35.3%";
        this.gameDiv.style.display = "none";
        this.myImg.src = "resource/assets/img1.jpg";
        this.myImg.style.width = "30%";
        this.gameDiv.appendChild(this.myImg);
        this.width = 640;
        this.height = 1030;
        //alert("value:"+value+",url:"+url);
        this.bg3 = new BitmapDisplay;
        this.bg3.setBitmapByName("bg3");
        this.setHorizontalCenter(this.bg3);
        this.setVerticalCenter(this.bg3);
        this.addChild(this.bg3);
        var tmpstr = 'p' + value;
        this.pagetxt = new BitmapDisplay;
        this.pagetxt.setBitmapByName(tmpstr);
        this.pagetxt.anchorOffsetX = this.pagetxt.width / 2;
        this.pagetxt.anchorOffsetY = this.pagetxt.height / 2;
        this.pagetxt.x = this.width / 2;
        this.pagetxt.y = 600;
        this.addChild(this.pagetxt);
        this.retrybut = new BitmapDisplay;
        this.retrybut.setBitmapByName("sharebut");
        this.retrybut.anchorOffsetX = this.retrybut.width / 2;
        this.retrybut.anchorOffsetY = this.retrybut.height / 2;
        this.retrybut.x = this.width / 2;
        this.retrybut.y = 700;
        this.retrybut.touchEnabled = true;
        this.addChild(this.retrybut);
        this.retrybut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoS1, this);
        //var qrCode:egret.Sprite = qr.QRCode.create(url.toString(),0x000000,128,128);
        //qrCode.anchorOffsetX = qrCode.width/2;
        //qrCode.anchorOffsetY = qrCode.height/2;
        //qrCode.x = this.width/2;
        //qrCode.y = 825;
        if (value == 1) {
            this.gameDiv.style.display = "";
        }
        else if (value == 2 || value == 3) {
            this.gameDiv.style.display = "";
        }
        this.setFullScreen();
        //var username = __global.usernickname;
        JSSDK.getWeiXinShareAppMessage(2, ConfigModel.wx_title, ConfigModel.link, ConfigModel.imgURL, ConfigModel.getUserName() + ConfigModel.wx_desc);
        JSSDK.getWeiXinShareTimeline(2, ConfigModel.wx_title, ConfigModel.link, ConfigModel.imgURL);
        console.log(ConfigModel.wx_title, ConfigModel.link, ConfigModel.imgURL);
    };
    p.qrImg = function () {
        //
        //var img = document.createElement("img");
        //img.setAttribute("src","resource/assets/img1.png");
        //var imgX = 200;
        //var imgY = 200;
        //img.setAttribute("style","margin:0px;padding:0px;position:absolute;z-index:99999;left:"+ imgX +"px;top:"+ imgY +"px");
        //document.body.appendChild(img);
    };
    p.gotoS1 = function () {
        var dataEvent = new DataEvent(DataEvent.GOTO_SCENE1);
        this.dispatchEvent(dataEvent);
        this.gameDiv.style.display = "none";
        this.gameDiv.removeChild(this.myImg);
    };
    return Scene3;
})(DisplayScene);
egret.registerClass(Scene3,"Scene3");
//# sourceMappingURL=Scene3.js.map