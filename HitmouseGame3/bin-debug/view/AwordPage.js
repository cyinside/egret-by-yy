/**
 * Created by Administrator on 2016/6/17.
 */
/**
 * Created by cyy on 16/5/26.
 */
var AwordPage = (function (_super) {
    __extends(AwordPage, _super);
    function AwordPage() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=AwordPage,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.bg = new BitmapDisplay();
        this.addChild(this.bg);
        this.but = new BitmapDisplay("playBut");
        this.setHorizontalCenter(this.but);
        this.but.touchEnabled = true;
        this.but.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.but.y = 800;
        //this.setFullScreen();
    };
    p.setPage = function (num) {
        switch (num) {
            case 0:
                this.bg.setBitmapByName("no");
                this.addChild(this.but);
                break;
            case 1:
                this.bg.setBitmapByName("yes");
                break;
        }
    };
    p.startGame = function () {
        SceneUtil.changeScene(2);
    };
    return AwordPage;
}(DisplayScene));
egret.registerClass(AwordPage,'AwordPage');
//# sourceMappingURL=AwordPage.js.map