/**
 * Created by Administrator on 2016/6/16.
 */
var Scene9 = (function (_super) {
    __extends(Scene9, _super);
    function Scene9() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=Scene9,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay;
        this.bg1.setBitmapByName("p9");
        this.group.addChild(this.bg1);
        this.txt = new BitmapDisplay("9");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 150;
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
        SceneUtil.changeScene(10);
    };
    p.changePage1 = function () {
        SceneUtil.changeScene(8);
    };
    return Scene9;
}(DisplayScrollerScene));
egret.registerClass(Scene9,'Scene9');
//# sourceMappingURL=Scene9.js.map