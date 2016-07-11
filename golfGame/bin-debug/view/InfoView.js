/**
 * Created by Administrator on 2016/7/7.
 */
var InfoView = (function (_super) {
    __extends(InfoView, _super);
    function InfoView() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=InfoView,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.blackRect = new BlackRcet;
        this.blackRect.alpha = 0;
        this.addChild(this.blackRect);
        this.blackRect.touchEnabled = true;
        this.info = new BitmapDisplay;
        this.addChild(this.info);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this);
    };
    p.setInfo = function (type, obj) {
        if (type === void 0) { type = 0; }
        if (obj === void 0) { obj = null; }
        switch (type) {
            case 1:
                this.info.setBitmapByName("rule");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha = 1;
                break;
            case 2:
                this.info.setBitmapByName("failInfo");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha = 1;
                this.blackRect.touchEnabled = false;
                break;
            case 3:
                this.info.setBitmapByName("bingoInfo");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha = 1;
                this.blackRect.touchEnabled = false;
                break;
            case 4:
                this.info.setBitmapByName("no_prize");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha = 1;
                this.blackRect.touchEnabled = false;
                break;
            case 5:
                this.info.setBitmapByName("is_prize");
                this.addChild(this.info);
                this.setHorizontalCenter(this.info);
                this.setVerticalCenter(this.info);
                this.blackRect.alpha = 1;
                this.blackRect.touchEnabled = false;
                break;
        }
        this.obj = obj;
    };
    p.touchHandle = function (e) {
        switch (e.target) {
            case this.blackRect:
                this.removeInfo(this.obj);
                break;
        }
    };
    p.removeInfo = function (obj) {
        if (obj === void 0) { obj = null; }
        obj.removeChild(this);
    };
    return InfoView;
}(DisplayScene));
egret.registerClass(InfoView,'InfoView');
//# sourceMappingURL=InfoView.js.map