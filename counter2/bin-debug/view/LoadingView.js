/**
 * Created by cyy on 16/4/28.
 */
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        _super.call(this);
        this.num = 1;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LoadingView,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createScnen();
    };
    p.createScnen = function () {
        this.loadingBg = new BitmapDisplay("loadingBg");
        this.addChild(this.loadingBg);
        this.bitmap = new BitmapDisplay("bit1");
        this.setHorizontalCenter(this.bitmap);
        this.setVerticalCenter(this.bitmap);
        this.addChild(this.bitmap);
        this.timeOut = new egret.Timer(400, -1);
        this.timeOut.addEventListener(egret.TimerEvent.TIMER, this.changeBit, this);
        this.timeOut.start();
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 800;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.setFullScreen();
    };
    p.changeBit = function () {
        if (this.num == 1) {
            this.num = 2;
            this.bitmap.setBitmapByName("bit2");
        }
        else if (this.num == 2) {
            this.num = 1;
            this.bitmap.setBitmapByName("bit1");
        }
    };
    p.setProgress = function (current, total) {
        var num1 = Math.floor((current / total) * 100);
        this.textField.text = num1.toString() + "%";
        this.setHorizontalCenter(this.textField);
    };
    return LoadingView;
}(DisplayScene));
egret.registerClass(LoadingView,'LoadingView');
