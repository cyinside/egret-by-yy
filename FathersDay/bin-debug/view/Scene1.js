var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p1");
        this.group.addChild(this.bg1);
        this.txt = new BitmapDisplay("1");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 500;
        this.txt.alpha = 0;
        this.group.addChild(this.txt);
        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 920;
        this.group.addChild(this.forward);
        this.setFullScreen();
        this.setViewRect();
        this.addTransformation(1, this.sceneTw, this);
    };
    p.twInt = function () {
        this.alpha = 0;
        this.y = 0;
        this.txt.alpha = 0;
        egret.Tween.get(this).to({ alpha: 1 }, 400).wait(300).call(function () {
            this.txt.alpha = 0;
            egret.Tween.get(this.txt).to({ alpha: 1 }, 1000);
        });
    };
    p.sceneTw = function (num) {
        switch (num) {
            case -1:
                this.startMusic();
                egret.Tween.get(this).to({ y: -this.height, alpha: 0 }, 500, egret.Ease.sineIn).call(this.changePage, this);
        }
    };
    p.startMusic = function () {
        var musicDiv = document.getElementById("bgmusic");
        if (musicDiv["paused"] == true) {
            musicDiv["play"]();
        }
    };
    p.changePage = function () {
        SceneUtil.changeScene(2);
    };
    return Scene1;
}(DisplayScrollerScene));
egret.registerClass(Scene1,'Scene1');
//# sourceMappingURL=Scene1.js.map