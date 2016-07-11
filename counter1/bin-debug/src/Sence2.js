/**
 * Created by cyy on 15/10/13.
 */
var Sence2 = (function (_super) {
    __extends(Sence2, _super);
    function Sence2() {
        _super.call(this);
        this.txtArr = new Array();
        this.num = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Sence2.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        this.width = 640;
        this.height = 1040;
        this.bg2 = new BitmapDisplay;
        this.bg2.setBitmapByName("bg2");
        this.setHorizontalCenter(this.bg2);
        this.setVerticalCenter(this.bg2);
        this.addChild(this.bg2);
        this.b1 = new BitmapDisplay;
        this.b1.setBitmapByName("b1");
        this.b1.x = 0;
        this.b1.y = 378;
        this.b1.alpha = 0;
        this.addChild(this.b1);
        this.b1.touchEnabled = true;
        this.b1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b1.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b2 = new BitmapDisplay;
        this.b2.setBitmapByName("b2");
        this.b2.x = this.b1.width - 3;
        this.b2.y = 378;
        this.b2.alpha = 0;
        this.addChild(this.b2);
        this.b2.touchEnabled = true;
        this.b2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b2.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b3 = new BitmapDisplay;
        this.b3.setBitmapByName("b3");
        this.b3.x = this.b1.width + this.b2.width - 6;
        this.b3.y = 378;
        this.b3.alpha = 0;
        this.addChild(this.b3);
        this.b3.touchEnabled = true;
        this.b3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b3.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b4 = new BitmapDisplay;
        this.b4.setBitmapByName("b4");
        this.b4.x = 0;
        this.b4.y = 378 + this.b1.height - 5;
        this.b4.alpha = 0;
        this.addChild(this.b4);
        this.b4.touchEnabled = true;
        this.b4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b4.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b5 = new BitmapDisplay;
        this.b5.setBitmapByName("b5");
        this.b5.x = this.b4.width - 3;
        this.b5.y = 378 + this.b1.height - 5;
        this.b5.alpha = 0;
        this.addChild(this.b5);
        this.b5.touchEnabled = true;
        this.b5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b5.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b6 = new BitmapDisplay;
        this.b6.setBitmapByName("b6");
        this.b6.x = this.b4.width + this.b5.width - 6;
        this.b6.y = 378 + this.b1.height - 5;
        this.b6.alpha = 0;
        this.addChild(this.b6);
        this.b6.touchEnabled = true;
        this.b6.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b6.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b7 = new BitmapDisplay;
        this.b7.setBitmapByName("b7");
        this.b7.x = 0;
        this.b7.y = 378 + this.b1.height - 5 + this.b4.height - 6;
        this.b7.alpha = 0;
        this.addChild(this.b7);
        this.b7.touchEnabled = true;
        this.b7.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b7.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b8 = new BitmapDisplay;
        this.b8.setBitmapByName("b8");
        this.b8.x = this.b7.width - 4;
        this.b8.y = 378 + this.b1.height - 5 + this.b4.height - 6;
        this.b8.alpha = 0;
        this.addChild(this.b8);
        this.b8.touchEnabled = true;
        this.b8.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b8.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b9 = new BitmapDisplay;
        this.b9.setBitmapByName("b9");
        this.b9.x = this.b7.width + this.b8.width - 6;
        this.b9.y = 378 + this.b1.height - 5 + this.b4.height - 6;
        this.b9.alpha = 0;
        this.addChild(this.b9);
        this.b9.touchEnabled = true;
        this.b9.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b9.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b10 = new BitmapDisplay;
        this.b10.setBitmapByName("b10");
        this.b10.x = 0;
        this.b10.y = this.b7.y + this.b7.height - 5;
        this.b10.alpha = 0;
        this.addChild(this.b10);
        this.b10.touchEnabled = true;
        this.b10.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b10.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b11 = new BitmapDisplay;
        this.b11.setBitmapByName("b11");
        this.b11.x = this.b10.width - 6;
        this.b11.y = this.b7.y + this.b7.height - 5;
        this.b11.alpha = 0;
        this.addChild(this.b11);
        this.b11.touchEnabled = true;
        this.b11.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b11.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b12 = new BitmapDisplay;
        this.b12.setBitmapByName("b12");
        this.b12.x = this.b10.width + this.b11.width - 6;
        this.b12.y = this.b7.y + this.b7.height - 5;
        this.b12.alpha = 0;
        this.addChild(this.b12);
        this.b12.touchEnabled = true;
        this.b12.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b12.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b13 = new BitmapDisplay;
        this.b13.setBitmapByName("b13");
        this.b13.x = this.b1.width + this.b2.width - 6 + this.b3.width - 5;
        this.b13.y = 378;
        this.b13.alpha = 0;
        this.addChild(this.b13);
        this.b13.touchEnabled = true;
        this.b13.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b13.addEventListener(egret.TouchEvent.TOUCH_END, this.setResult, this);
        this.b15 = new BitmapDisplay;
        this.b15.setBitmapByName("b15");
        this.b15.x = this.b1.width + this.b2.width - 6 + this.b3.width - 5;
        this.b15.y = 378 + this.b13.height - 5;
        this.b15.alpha = 0;
        this.addChild(this.b15);
        this.b15.touchEnabled = true;
        this.b15.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.changeCor, this);
        this.b15.addEventListener(egret.TouchEvent.TOUCH_END, this.gotoResultPage, this);
        this.numTXT = new egret.TextField;
        this.numTXT.size = 60;
        this.numTXT.textColor = 0xFFFFFF;
        this.numTXT.text = this.num.toString();
        this.numTXT.anchorOffsetX = this.numTXT.width - 6;
        this.numTXT.anchorOffsetY = this.numTXT.height / 2;
        this.numTXT.y = 260;
        this.numTXT.x = this.width - this.numTXT.width - 30;
        this.addChild(this.numTXT);
        this.setFullScreen();
    };
    __egretProto__.changeCor = function (evt) {
        if (evt.currentTarget == this.b1) {
            this.b1.alpha = 1;
        }
        else if (evt.currentTarget == this.b2) {
            this.b2.alpha = 1;
        }
        else if (evt.currentTarget == this.b3) {
            this.b3.alpha = 1;
        }
        else if (evt.currentTarget == this.b4) {
            this.b4.alpha = 1;
        }
        else if (evt.currentTarget == this.b5) {
            this.b5.alpha = 1;
        }
        else if (evt.currentTarget == this.b6) {
            this.b6.alpha = 1;
        }
        else if (evt.currentTarget == this.b7) {
            this.b7.alpha = 1;
        }
        else if (evt.currentTarget == this.b8) {
            this.b8.alpha = 1;
        }
        else if (evt.currentTarget == this.b9) {
            this.b9.alpha = 1;
        }
        else if (evt.currentTarget == this.b10) {
            this.b10.alpha = 1;
        }
        else if (evt.currentTarget == this.b11) {
            this.b11.alpha = 1;
        }
        else if (evt.currentTarget == this.b12) {
            this.b12.alpha = 1;
        }
        else if (evt.currentTarget == this.b13) {
            this.b13.alpha = 1;
        }
        else if (evt.currentTarget == this.b15) {
            this.b15.alpha = 1;
        }
    };
    __egretProto__.setResult = function (evt) {
        var id = 0;
        if (evt.currentTarget == this.b1) {
            this.b1.alpha = 0;
            id = 1;
        }
        else if (evt.currentTarget == this.b2) {
            this.b2.alpha = 0;
            id = 2;
        }
        else if (evt.currentTarget == this.b3) {
            this.b3.alpha = 0;
            id = 3;
        }
        else if (evt.currentTarget == this.b4) {
            this.b4.alpha = 0;
            id = 4;
        }
        else if (evt.currentTarget == this.b5) {
            this.b5.alpha = 0;
            id = 5;
        }
        else if (evt.currentTarget == this.b6) {
            this.b6.alpha = 0;
            id = 6;
        }
        else if (evt.currentTarget == this.b7) {
            this.b7.alpha = 0;
            id = 7;
        }
        else if (evt.currentTarget == this.b8) {
            this.b8.alpha = 0;
            id = 8;
        }
        else if (evt.currentTarget == this.b9) {
            this.b9.alpha = 0;
            id = 9;
        }
        else if (evt.currentTarget == this.b10) {
            this.b10.alpha = 0;
            id = 10;
        }
        else if (evt.currentTarget == this.b11) {
            this.b11.alpha = 0;
            id = 11;
        }
        else if (evt.currentTarget == this.b12) {
            this.b12.alpha = 0;
            id = 12;
        }
        else if (evt.currentTarget == this.b13) {
            this.b13.alpha = 0;
            this.txtArr = [];
            this.numTXT.text = this.num.toString();
            this.numTXT.anchorOffsetX = this.numTXT.width;
            return;
        }
        else if (evt.currentTarget == this.b15) {
            this.b15.alpha = 0;
        }
        var btnData = ConfigModel.getInstance().getBtnInfo(id);
        this.txtArr.push(btnData);
        for (var i = 0; i < this.txtArr.length; i++) {
            if (i > 0) {
                this.numTXT.text += "+" + this.txtArr[i]["value"].toString();
                this.numTXT.anchorOffsetX = this.numTXT.width;
            }
            else {
                this.numTXT.text = "";
                this.numTXT.text = this.txtArr[i]["value"].toString();
                this.numTXT.anchorOffsetX = this.numTXT.width;
            }
        }
    };
    __egretProto__.gotoResultPage = function () {
        var dataEvent = new DataEvent(DataEvent.GOTO_RESULTPAGE);
        this.dispatchEvent(dataEvent);
    };
    return Sence2;
})(DisplayScene);
Sence2.prototype.__class__ = "Sence2";
