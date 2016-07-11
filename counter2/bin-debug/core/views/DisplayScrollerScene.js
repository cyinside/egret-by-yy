var DisplayScrollerScene = (function (_super) {
    __extends(DisplayScrollerScene, _super);
    function DisplayScrollerScene() {
        _super.call(this);
        this.group = new eui.Group();
        this.scroller = new eui.Scroller();
        this.scroller.viewport = this.group;
        this.scroller.bounces = true;
        this.addChild(this.scroller);
    }
    var d = __define,c=DisplayScrollerScene,p=c.prototype;
    p.setViewRect = function (width, height) {
        if (width === void 0) { width = document.body.clientWidth; }
        if (height === void 0) { height = document.body.clientHeight; }
        var ua = navigator.userAgent.toLowerCase();
        var value = 2;
        switch (egret.Capabilities.os) {
            case "iOS":
                if (ua.indexOf("iphone") != -1) {
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }
                else if (ua.indexOf("ipad") != -1) {
                    this.scroller.width = width * value;
                    this.scroller.height = height * 0.835;
                }
                else {
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }
                break;
            case "Android":
            case "Windows Phone":
            case "Mac OS":
                this.scroller.width = width * value;
                this.scroller.height = height * value;
                break;
            case "Windows PC":
            case "Unknown":
                if (ua.indexOf("meego") != -1) {
                    this.scroller.width = width * value;
                    this.scroller.height = height * value;
                }
                else {
                    this.scroller.width = width;
                    this.scroller.height = height;
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
