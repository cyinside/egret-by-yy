var DisplayScrollerScene = (function (_super) {
    __extends(DisplayScrollerScene, _super);
    function DisplayScrollerScene() {
        _super.call(this);
        this.group = new eui.Group();
        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
        this.addChild(this.scroller);
    }
    var d = __define,c=DisplayScrollerScene,p=c.prototype;
    p.setViewRect = function (width, height) {
        if (width === void 0) { width = document.documentElement.clientWidth; }
        if (height === void 0) { height = document.documentElement.clientHeight; }
        var ua = navigator.userAgent.toLowerCase();
        switch (egret.Capabilities.os) {
            case "iOS":
                if (ua.indexOf("ipad") != -1) {
                    this.scroller.width = width * 2;
                    this.scroller.height = height * 0.85;
                }
                else {
                    if (height < this.height / 2) {
                        this.scroller.height = height * 2;
                        this.scroller.width = width * 2;
                    }
                    else {
                        this.scroller.height = this.height;
                        this.scroller.width = this.width;
                    }
                }
                break;
            case "Android":
            case "Windows Phone":
            case "Mac OS":
                if (height < this.height / 2) {
                    this.scroller.height = height * 2;
                    this.scroller.width = width * 2;
                }
                else {
                    this.scroller.height = this.height;
                    this.scroller.width = this.width;
                }
                break;
            case "Windows PC":
            case "Unknown":
                if (height < this.height / 2) {
                    this.scroller.height = height * 2;
                    this.scroller.width = width * 2;
                }
                else {
                    this.scroller.height = this.height;
                    this.scroller.width = this.width;
                }
                break;
        }
    };
    p.setFullScreen = function () {
        this.scaleX = this.scaleY = Math.max(GameConfig.curWidth() / this.width, GameConfig.curHeight() / this.height);
    };
    p.setHorizontalCenter = function (display) {
        display.x = (this.width - display.width * display.scaleX) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    p.setVerticalCenter = function (display) {
        display.y = (this.height - display.height * display.scaleY) * 0.5;
        return new egret.Point(display.x, display.y);
    };
    return DisplayScrollerScene;
}(egret.DisplayObjectContainer));
egret.registerClass(DisplayScrollerScene,'DisplayScrollerScene');
