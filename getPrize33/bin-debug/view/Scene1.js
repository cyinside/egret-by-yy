/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.gameDiv = document.createElement("div");
        this.myImg = document.createElement("img");
        this.num1 = 0;
        this.createScnen();
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("prizebg");
        this.bg1.touchEnabled = true;
        this.group.addChild(this.bg1);
        this.circle2 = new BitmapDisplay("circle2");
        this.circle2.anchorOffsetX = this.circle2.width / 2;
        this.circle2.anchorOffsetY = this.circle2.height / 2;
        this.circle2.x = 240;
        this.circle2.y = 540;
        this.group.addChild(this.circle2);
        this.startBut = new BitmapDisplay("startBut");
        this.startBut.anchorOffsetX = this.startBut.width / 2;
        this.startBut.anchorOffsetY = this.startBut.height / 2;
        this.startBut.x = this.width / 2;
        this.startBut.y = 900;
        this.startBut.touchEnabled = true;
        this.group.addChild(this.startBut);
        this.startBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.blackrect = new egret.Shape;
        this.blackrect.graphics.beginFill(0x000000, 0.7);
        this.blackrect.graphics.drawRect(0, 0, this.width, this.height);
        this.blackrect.graphics.endFill();
        this.resultView = new BitmapDisplay;
        this.resultView.alpha = 0;
        this.resultView.x = 40;
        this.setVerticalCenter(this.resultView);
        this.setHorizontalCenter(this.resultView);
        this.remove = new BitmapDisplay("remove");
        this.remove.x = 470;
        this.remove.y = 240;
        this.remove.touchEnabled = true;
        this.remove.addEventListener(egret.TouchEvent.TOUCH_TAP, this.retry, this);
        this.gameDiv.setAttribute("id", "gameDiv");
        this.gameDiv.style.width = "50%";
        this.gameDiv.style.position = "absolute";
        this.gameDiv.style.zIndex = "99";
        this.gameDiv.style.top = "48%";
        this.gameDiv.style.left = "23%";
        this.gameDiv.style.display = "";
        this.myImg.src = "resource/assets/getPrize/code.jpg";
        this.myImg.style.width = "70%";
        this.setFullScreen();
        this.setViewRect();
    };
    p.touchHandle = function () {
        this.startMusic();
        this.startBut.touchEnabled = false;
        DataModel.getInstance().onTouchHandle();
        Global.addEventListener(DataEvent.DATACOMPLETE, this.circleTween, this);
        Global.addEventListener(DataEvent.DATAONFAIL, this.onFaliHandle, this);
    };
    p.showResult = function () {
        this.group.addChild(this.blackrect);
        this.group.addChild(this.resultView);
        egret.Tween.get(this.resultView).to({ alpha: 1 }, 800).call(function () {
            if (this.isPrize == true) {
                document.body.appendChild(this.gameDiv);
                this.gameDiv.appendChild(this.myImg);
            }
        }, this);
        this.setVerticalCenter(this.resultView);
        this.setHorizontalCenter(this.resultView);
        if (this.isPrize == false) {
            egret.setTimeout(function () {
                this.group.addChild(this.remove);
            }, this, 600);
        }
    };
    p.circleTween = function () {
        if (DataModel.prizeWord.indexOf("book") != -1) {
            this.resultView.setBitmapByName("isprize");
            this.num1 = Math.floor(Math.random() * 3 + 1);
            this.isPrize = true;
        }
        else if (DataModel.prizeWord.indexOf("0") != -1) {
            this.resultView.setBitmapByName("noprize");
            this.num1 = Math.floor(Math.random() * 6 + 4);
            this.isPrize = false;
        }
        var rotationNum = 0;
        switch (this.num1) {
            case 1:
                rotationNum = 60;
                break;
            case 2:
                rotationNum = 180;
                break;
            case 3:
                rotationNum = 300;
                break;
            case 4:
                rotationNum = 120;
                break;
            case 5:
                rotationNum = 240;
                break;
            case 6:
                rotationNum = 360;
                break;
        }
        if (this.num1 > 0) {
            egret.Tween.get(this.circle2).to({ rotation: rotationNum + (360 * 4) }, 4000, egret.Ease.sineOut)
                .wait(800).call(this.showResult, this);
        }
    };
    p.onFaliHandle = function () {
        this.startBut.touchEnabled = true;
    };
    p.retry = function () {
        this.startBut.touchEnabled = true;
        this.group.removeChild(this.resultView);
        this.resultView.alpha = 0;
        this.group.removeChild(this.blackrect);
        this.group.removeChild(this.remove);
        this.isPrize = false;
    };
    p.startMusic = function () {
        var musicDiv = document.getElementById("bgmusic");
        if (musicDiv["paused"] == true) {
            musicDiv["play"]();
        }
    };
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
