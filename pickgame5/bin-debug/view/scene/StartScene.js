var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.bg = new UIBitmapDisplay("bg1");
        this.group.addChild(this.bg);
        this.setHorizontalCenter(this.bg);
        //this.text1 = new egret.TextField();
        //this.text1.textColor = 0x7fa2cc;
        //this.text1.size = 28;
        //this.text1.width = 200;
        //this.text1.y = 810;
        //this.group.addChild(this.text1);
        //this.text1.textAlign = egret.HorizontalAlign.CENTER;
        //this.text1.text = ConfigModel.getInstance().ruleName;
        //this.setHorizontalCenter(this.text1);
        //
        //this.text2 = new ETextField();
        //this.text2.size = 24;
        //this.text2.textAlign = egret.HorizontalAlign.CENTER;
        //this.text2.lineSpacing = 3;
        //this.text2.setText(ConfigModel.getInstance().rule);
        //this.text2.y = 855;
        //this.group.addChild(this.text2);
        //this.setHorizontalCenter(this.text2);
        this.btn = new BitmapDisplay("start");
        this.group.addChild(this.btn);
        this.btn.touchEnabled = true;
        this.btn.anchorOffsetX = this.btn.width / 2;
        this.btn.anchorOffsetY = this.btn.height;
        this.btn.y = 765;
        this.btn.x = 320;
        this.btn.scaleX = 0.9;
        this.btn.scaleY = 0.9;
        egret.Tween.get(this.btn, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 2000, egret.Ease.sineInOut).to({ scaleX: 0.9, scaleY: 0.9 }, 2000, egret.Ease.sineInOut);
        this.setFullScreen();
        this.setViewRect();
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    }
    var d = __define,c=StartScene,p=c.prototype;
    p.onTouchHandler = function (e) {
        this.startMusic();
        this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        this.btn.touchEnabled = false;
        //egret.Tween.removeTweens(this.btn);
        var event = new DataEvent(DataEvent.GOTO_SCENE);
        event.sceneID = 2;
        Global.dispatchEvent(DataEvent.GOTO_SCENE, event);
    };
    p.startMusic = function () {
        var musicDiv = document.getElementById("bgmusic");
        if (musicDiv["paused"] == true) {
            musicDiv["play"]();
        }
    };
    p.remove = function () {
        this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    return StartScene;
}(DisplayScrollerScene));
egret.registerClass(StartScene,'StartScene');
//# sourceMappingURL=StartScene.js.map