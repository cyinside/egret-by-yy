/**
 * Created by cyy on 16/4/27.
 */
var Scene2 = (function (_super) {
    __extends(Scene2, _super);
    function Scene2() {
        _super.call(this);
        this.num = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene2,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createScnen();
    };
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg1 = new UIBitmapDisplay("p4");
        this.bg1.alpha = 0;
        this.group.addChild(this.bg1);
        this.okBut = new BitmapDisplay("okBut");
        this.setHorizontalCenter(this.okBut);
        this.okBut.y = 900;
        this.okBut.touchEnabled = true;
        this.okBut.alpha = 0;
        this.group.addChild(this.okBut);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle2, this);
        this.bignumber = new BitmapDisplay();
        this.bignumber.y = 610;
        this.bignumber.x = 180;
        this.group.addChild(this.bignumber);
        var x = 160;
        var y = 735;
        for (var i = 1; i < 11; i++) {
            var numberBut = new BitmapDisplay;
            numberBut.setBitmapByName(i.toString());
            numberBut.name = i.toString();
            this.group.addChild(numberBut);
            numberBut.touchEnabled = true;
            if (i % 6 == 0) {
                x = 160;
                if (i > 0) {
                    y += 60;
                }
            }
            numberBut.x = x;
            numberBut.y = y;
            x += 73;
        }
        this.setViewRect();
        this.setFullScreen();
        egret.Tween.get(this.bg1).to({ alpha: 1 }, 800);
        egret.Tween.get(this.okBut).to({ alpha: 1 }, 800);
    };
    p.gotoScene3 = function () {
        if (this.num == 0) {
            alert("请选择宝马车数量");
        }
        else {
            if (this.num == 8) {
                egret.Tween.get(this.bg1).to({ alpha: 0 }, 800);
                egret.Tween.get(this.okBut).to({ alpha: 0 }, 800).call(function () {
                    var data = new DataEvent(DataEvent.CHANGE_SCENE);
                    data.sceneID = 3;
                    Global.dispatchEvent(DataEvent.CHANGE_SCENE, data);
                }, this);
            }
            else {
                alert("选错了，再试试吧");
            }
        }
    };
    p.touchHandle2 = function (e) {
        var num = parseInt(e.target.name);
        if (num > 0 && num < 11) {
            this.okBut.touchEnabled = true;
            this.bignumber.setBitmapByName(e.target.name);
            this.bignumber.anchorOffsetX = this.bignumber.width / 2;
            this.num = parseInt(e.target.name);
        }
        else {
            switch (e.target) {
                case this.okBut:
                    this.okBut.touchEnabled = false;
                    this.gotoScene3();
                    break;
            }
        }
    };
    return Scene2;
}(DisplayScrollerScene));
egret.registerClass(Scene2,'Scene2');
