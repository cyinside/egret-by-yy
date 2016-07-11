var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        _super.call(this);
        this.width = 640;
        this.height = 1030;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LoadingScene,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createView();
    };
    p.createView = function () {
        this.bg = new UIBitmapDisplay("loadBg");
        this.group.addChild(this.bg);
        this.loading = new BitmapDisplay("loading");
        this.addChild(this.loading);
        this.setHorizontalCenter(this.loading);
        this.setVerticalCenter(this.loading);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 650;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.setHorizontalCenter(this.textField);
        this.setFullScreen();
        this.setViewRect();
    };
    p.setProgress = function (current, total) {
        this.textField.text = "Loading..." + Math.floor((current / total) * 100) + "%";
        this.setHorizontalCenter(this.textField);
    };
    return LoadingScene;
}(DisplayScrollerScene));
egret.registerClass(LoadingScene,'LoadingScene');
