var Scene2 = (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene2,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p2");
        this.group.addChild(this.bg1);
        this.txt = new BitmapDisplay("2");
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
                egret.Tween.get(this).to({ y: -this.height, alpha: 0 }, 500, egret.Ease.sineIn).call(this.changePage, this);
                break;
            case 1:
                egret.Tween.get(this).to({ y: this.height, alpha: 0 }, 500, egret.Ease.sineIn).call(this.changePage1, this);
                break;
        }
    };
    p.changePage = function () {
        SceneUtil.changeScene(3);
    };
    p.changePage1 = function () {
        console.log(11);
        SceneUtil.changeScene(1);
    };
    return Scene2;
}(DisplayScrollerScene));
egret.registerClass(Scene2,'Scene2');
//# sourceMappingURL=Scene2.js.map