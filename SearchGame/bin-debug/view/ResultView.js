/**
 * Created by cyy on 16/6/13.
 */
var ResultView = (function (_super) {
    __extends(ResultView, _super);
    function ResultView() {
        _super.call(this);
        this.typeNum = 0;
        this.createScene();
    }
    var d = __define,c=ResultView,p=c.prototype;
    p.createScene = function () {
        this.width = 640;
        this.height = 1030;
        this.blackRect = new BlackRcet;
        this.addChild(this.blackRect);
        this.bg = new BitmapDisplay();
        this.addChild(this.bg);
        this.text = new BitmapDisplay;
        this.text.y = 500;
        this.okBut = new BitmapDisplay();
        this.okBut.touchEnabled = true;
        this.okBut.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
        //this.setFullScreen();
    };
    p.setScene = function (num) {
        switch (num) {
            case 1:
                this.bg.setBitmapByName("rule");
                this.okBut.setBitmapByName("okBut");
                this.setHorizontalCenter(this.okBut);
                this.okBut.name = "1";
                this.okBut.y = 680;
                break;
            case 2:
                this.bg.setBitmapByName("resultBg");
                this.text.setBitmapByName("success");
                this.addChild(this.text);
                this.okBut.setBitmapByName("getPize");
                this.setHorizontalCenter(this.okBut);
                this.okBut.name = "2";
                this.okBut.y = 750;
                break;
            case 3:
                this.bg.setBitmapByName("resultBg");
                this.text.setBitmapByName("fail");
                this.addChild(this.text);
                this.okBut.setBitmapByName("retryBut");
                this.setHorizontalCenter(this.okBut);
                this.okBut.name = "3";
                this.okBut.y = 750;
                break;
        }
        this.setHorizontalCenter(this.bg);
        this.setVerticalCenter(this.bg);
        this.setHorizontalCenter(this.text);
        this.addChild(this.okBut);
    };
    p.touchHandle = function (evt) {
        var id = parseInt(evt.target.name);
        switch (id) {
            case 1:
                SceneUtil.changeScene(2);
                break;
            case 2:
                alert(2);
                break;
            case 3:
                Global.dispatchEvent(DataEvent.RETRYGAME, this);
                break;
        }
    };
    return ResultView;
}(DisplayScene));
egret.registerClass(ResultView,'ResultView');
//# sourceMappingURL=ResultView.js.map