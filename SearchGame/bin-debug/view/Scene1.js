/**
 * Created by cyy on 15/11/13.
 */
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.bitmapText = new egret.BitmapText();
        this.pointarrA = new Array();
        this.pointarrB = new Array();
        this.score = 0;
        RES.getResByUrl("resource/assets/numbertxt.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);
        this.createScnen();
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.onLoadComplete = function (font) {
        this.bitmapText.font = font;
        this.group.addChild(this.bitmapText);
        this.bitmapText.x = 500;
        this.bitmapText.y = 180;
    };
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("bg");
        this.group.addChild(this.bg1);
        this.timeClock = new TimeClock();
        this.group.addChild(this.timeClock);
        this.timeClock.y = 180;
        this.timeClock.x = 140;
        this.picA = new BitmapDisplay();
        this.picA.x = this.width / 2;
        this.picA.y = 430;
        this.picA.touchEnabled = true;
        this.picA.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cutTime, this);
        this.group.addChild(this.picA);
        this.picB = new BitmapDisplay();
        this.picB.x = this.width / 2;
        this.picB.y = 800;
        this.picB.touchEnabled = true;
        this.picB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cutTime, this);
        this.group.addChild(this.picB);
        this.picMaskA = new BitmapDisplay("picMask");
        this.picMaskA.anchorOffsetX = this.picMaskA.width / 2;
        this.picMaskA.anchorOffsetY = this.picMaskA.height / 2;
        this.picMaskA.x = this.picA.x;
        this.picMaskA.y = this.picA.y;
        this.group.addChild(this.picMaskA);
        this.picMaskB = new BitmapDisplay("picMask");
        this.picMaskB.anchorOffsetX = this.picMaskB.width / 2;
        this.picMaskB.anchorOffsetY = this.picMaskB.height / 2;
        this.picMaskB.x = this.picB.x;
        this.picMaskB.y = this.picB.y;
        this.group.addChild(this.picMaskB);
        for (var i = 0; i < GameSeting.maxTouchNum; i++) {
            var touchPointA = new BitmapDisplay("circle");
            GameSeting.getInstance().setCenter(touchPointA, 0);
            this.pointarrA.push(touchPointA);
            var touchPointB = new BitmapDisplay("circle");
            GameSeting.getInstance().setCenter(touchPointB, 0);
            this.pointarrB.push(touchPointB);
            touchPointA.alpha = 0;
            touchPointB.alpha = 0;
            touchPointA.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
            touchPointB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        }
        this.bitmapText.text = "0/1";
        this.pass = new BitmapDisplay("pass");
        this.pass.scaleX = this.pass.scaleY = 0;
        this.pass.x = 170;
        this.pass.y = 500;
        this.group.addChildAt(this.pass, 99);
        this.resultView = new ResultView();
        this.setHorizontalCenter(this.resultView);
        this.setVerticalCenter(this.resultView);
        this.chapterSeting();
        this.setFullScreen();
        this.setViewRect();
        Global.addEventListener(DataEvent.GAMEOVER, this.gameOverHandle, this);
        Global.addEventListener(DataEvent.RETRYGAME, this.retry, this);
    };
    p.chapterSeting = function () {
        var chapterNum = GameSeting.chapterNum;
        this.bitmapText.text = this.score.toString() + "/" + GameSeting.chapterNum.toString();
        var lactionArr = GameSeting.getInstance().pointLocation(chapterNum);
        this.picA.setBitmapByName(chapterNum + "a");
        this.picB.setBitmapByName(chapterNum + "b");
        GameSeting.getInstance().setCenter(this.picA, 1);
        GameSeting.getInstance().setCenter(this.picB, 1);
        var ex = 50;
        var ey = 290;
        for (var i = 0; i < chapterNum; i++) {
            this.pointarrA[i].x = lactionArr[i].x + ex;
            this.pointarrA[i].y = lactionArr[i].y + ey;
            this.pointarrA[i].name = i.toString();
            this.group.addChild(this.pointarrA[i]);
            //this.pointarrA[i].alpha =1;
            this.pointarrA[i].touchEnabled = true;
            this.pointarrB[i].x = this.pointarrA[i].x;
            this.pointarrB[i].y = this.pointarrA[i].y + this.picA.height + 45;
            this.pointarrB[i].name = i.toString();
            this.group.addChild(this.pointarrB[i]);
            //this.pointarrB[i].alpha =1;
            this.pointarrB[i].touchEnabled = true;
        }
    };
    p.touchHandle = function (evt) {
        console.log("touchHandle");
        var num = parseInt(evt.target.name);
        this.pointarrA[num].touchEnabled = false;
        this.pointarrB[num].touchEnabled = false;
        this.pointarrA[num].alpha = 1;
        this.pointarrB[num].alpha = 1;
        this.pointHandle(num);
    };
    p.pointHandle = function (num) {
        console.log("pointHandle");
        this.score++;
        console.log(this.score);
        this.bitmapText.text = this.score.toString() + "/" + GameSeting.chapterNum.toString();
        //egret.Tween.get(this.pointarrA[num]).to({alpha:1},200);
        if (this.score == GameSeting.chapterNum) {
            egret.setTimeout(function () {
                this.cheakPass(this.score);
            }, this, 500);
        }
    };
    p.cheakPass = function (num) {
        console.log("cheakPass");
        switch (num) {
            case 1:
                this.timeClock.stopClock();
                this.group.addChild(this.resultView);
                this.resultView.setScene(2);
                this.setPicTouch(0);
                break;
            case GameSeting.chapterNum:
                this.group.addChild(this.pass);
                egret.Tween.get(this.pass).to({ scaleX: 0.7, scaleY: 0.7 }, 500, egret.Ease.backInOut).wait(400).call(function () {
                    this.reset();
                    egret.setTimeout(this.chapterPass, this, 300);
                }, this);
                break;
            case 99:
                if (GameSeting.chapterNum > 0) {
                    this.timeClock.stopClock();
                    this.group.addChild(this.resultView);
                    this.resultView.setScene(3);
                    this.setPicTouch(0);
                }
                break;
        }
    };
    p.reset = function () {
        console.log("reset");
        this.score = 0;
        for (var i = 0; i < GameSeting.maxTouchNum; i++) {
            this.pointarrA[i].alpha = 0;
            this.pointarrB[i].alpha = 0;
            egret.Tween.removeTweens(this.pointarrA[i]);
            this.pointarrB[i].touchEnabled = false;
            if (this.contains(this.pointarrA[i])) {
                this.group.removeChild(this.pointarrA[i]);
            }
            if (this.contains(this.pointarrB[i])) {
                this.group.removeChild(this.pointarrB[i]);
            }
        }
        this.pass.scaleX = this.pass.scaleY = 0;
    };
    p.retry = function () {
        this.reset();
        GameSeting.chapterNum = 5;
        GameSeting.getInstance().pointLocation(6);
        this.chapterSeting();
        this.bitmapText.text = "0/5";
        this.timeClock.resetTime();
        this.group.removeChild(this.resultView);
        this.setPicTouch(1);
    };
    p.chapterPass = function () {
        console.log("chapterPass");
        GameSeting.chapterNum--;
        this.chapterSeting();
    };
    p.gameOverHandle = function () {
        this.cheakPass(99);
    };
    p.cutTime = function () {
        ShockUtils.getInstance().shock(ShockUtils.getInstance().SPRITE, this);
        this.timeClock.cutTime();
    };
    p.setPicTouch = function (type) {
        switch (type) {
            case 0:
                this.picA.touchEnabled = false;
                this.picB.touchEnabled = false;
                break;
            case 1:
                this.picA.touchEnabled = true;
                this.picB.touchEnabled = true;
                break;
        }
    };
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
//# sourceMappingURL=Scene1.js.map