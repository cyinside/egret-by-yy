/**
 * Created by cyy on 16/1/18.
 */
var Scene2 = (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        _super.call(this);
        this.gameDiv = document.createElement("div");
        this.myImg = document.createElement("img");
        this.createScnen();
    }
    var d = __define,c=Scene2,p=c.prototype;
    p.createScnen = function () {
        this.gameDiv.setAttribute("id", "gameDiv");
        this.gameDiv.style.width = "80%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "33%";
        this.gameDiv.style.left = "20%";
        this.gameDiv.style.display = "";
        this.myImg.src = "resource/assets/p2/img.png";
        this.myImg.style.width = "75%";
        document.body.appendChild(this.gameDiv);
        this.gameDiv.appendChild(this.myImg);
        this.width = 640;
        this.height = 1030;
        this.bg3 = new BitmapDisplay;
        this.bg3.setBitmapByName("bg3");
        this.addChild(this.bg3);
        this.musicBut = new MusicControl;
        StageUtil.setVerticalCenter(this.musicBut);
        StageUtil.setHorizontalCenter(this.musicBut);
        this.addChild(this.musicBut);
        this.back = new BitmapDisplay;
        this.back.setBitmapByName("back");
        this.back.x = 530;
        this.back.y = 890;
        this.back.scaleX = this.back.scaleY = 1.4;
        this.addChild(this.back);
        this.sharetxt = new BitmapDisplay;
        this.sharetxt.setBitmapByName("sharetxt1");
        this.sharetxt.scaleX = 1;
        this.sharetxt.scaleY = 1;
        this.sharetxt.x = 510;
        this.sharetxt.y = 100;
        this.sharetxt.alpha = 1;
        this.addChild(this.sharetxt);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backtoS2, this);
        this.setFullScreen();
        //egret.Tween.get(this.sharetxt,{loop:true}).to({alpha:1},1000).to({alpha:0},1000);
    };
    p.backtoS2 = function () {
        var dataEvent = new DataEvent(DataEvent.backtoScene2);
        this.dispatchEvent(dataEvent);
        this.gameDiv.style.display = "";
        document.body.removeChild(this.gameDiv);
    };
    return Scene2;
})(DisplayScene);
egret.registerClass(Scene2,'Scene2');
//# sourceMappingURL=Scene2.js.map