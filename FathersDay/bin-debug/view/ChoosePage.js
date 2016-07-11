/**
 * Created by Administrator on 2016/6/16.
 */
var ChoosePage = (function (_super) {
    __extends(ChoosePage, _super);
    function ChoosePage() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=ChoosePage,p=c.prototype;
    p.createScnen = function () {
        DataModel.getInstance().onTouchHandle2();
        this.width = 640;
        this.height = 1030;
        this.bg1 = new BitmapDisplay("choosePage");
        this.group.addChild(this.bg1);
        this.noBut = new BitmapDisplay("no");
        this.noBut.y = 800;
        this.noBut.x = 50;
        this.noBut.touchEnabled = true;
        this.group.addChild(this.noBut);
        this.noBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.yesBut = new BitmapDisplay("yes");
        this.yesBut.y = 800;
        this.yesBut.x = 370;
        this.yesBut.touchEnabled = true;
        this.group.addChild(this.yesBut);
        this.yesBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        this.numTxt = new egret.TextField;
        this.numTxt.text = DataModel.sumNum.toString();
        this.numTxt.size = 60;
        this.numTxt.y = 370;
        this.setHorizontalCenter(this.numTxt);
        this.group.addChild(this.numTxt);
        this.txt = new BitmapDisplay("10");
        this.setHorizontalCenter(this.txt);
        this.txt.y = 300;
        this.group.addChild(this.txt);
        this.forward = new ForWardView();
        this.setHorizontalCenter(this.forward);
        this.forward.y = 920;
        this.group.addChild(this.forward);
        this.setFullScreen();
        this.setViewRect();
        this.addTransformation(1, this.sceneTw, this);
        Global.addEventListener(DataEvent.DATACOMPLETE, this.setNum, this);
    };
    p.twInt = function () {
        this.alpha = 0;
        this.y = 0;
        egret.Tween.get(this).to({ alpha: 1 }, 400);
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
        SceneUtil.changeScene(11);
    };
    p.changePage1 = function () {
        SceneUtil.changeScene(9);
    };
    p.touchHandle = function (e) {
        switch (e.currentTarget) {
            case this.yesBut:
                DataModel.getInstance().onTouchHandle();
                egret.Tween.get(this.noBut).to({ alpha: 0 }, 600);
                egret.Tween.get(this.yesBut).to({ x: this.width / 2 - this.yesBut.width / 2 }, 600);
                break;
            case this.noBut:
                egret.Tween.get(this.yesBut).to({ alpha: 0 }, 600);
                egret.Tween.get(this.noBut).to({ x: this.width / 2 - this.noBut.width / 2 }, 600);
                break;
        }
    };
    p.setNum = function () {
        this.numTxt.text = DataModel.sumNum.toString();
        this.setHorizontalCenter(this.numTxt);
    };
    return ChoosePage;
}(DisplayScrollerScene));
egret.registerClass(ChoosePage,'ChoosePage');
//# sourceMappingURL=ChoosePage.js.map