/**
 * Created by Administrator on 2015/8/11.
 */
/*
 * lixin // [url=mailto:297145207@qq.com]297145207@qq.com[/url]
 *           2015.02.20
 *           @��ק
 * */
var Drag = (function (_super) {
    __extends(Drag, _super);
    function Drag() {
        _super.call(this);
        this.offsetX = 0;
        this.offsetY = 0;
        this.bX = 0;
        this.bY = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.width = 640;
        this.height = 1030;
    }
    var d = __define,c=Drag,p=c.prototype;
    p.onAddToStage = function (event) {
    };
    /*
     * ��ʼ��ק
     * @param _dragObject ��ק����
     * @param offsetX     X��ƫ��
     * @param offsetY     Y��ƫ��
     * */
    p.start = function (_dragObject, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        //
        this.dragObject = _dragObject;
        this.dragObject.touchEnabled = true;
        this.dragObject.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
    };
    p.onTouchEend = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    p.onTouchBegin = function (e) {
        this.bX = e.stageX - this.dragObject.x;
        this.bY = e.stageY - this.dragObject.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
    };
    p.onTouchMove = function (e) {
        if (this.dragObject) {
            this.dragObject.y = -(this.bY - e.stageY);
            if (this.dragObject.y > 0) {
                this.dragObject.y = 0;
            }
            else if (this.dragObject.y + this.dragObject.height < this.height) {
                this.dragObject.y = -(this.dragObject.height - this.height);
            }
        }
        else {
            this.stop();
        }
    };
    p.stop = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEend, this);
        this.dragObject.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    };
    return Drag;
}(DisplayScene));
egret.registerClass(Drag,'Drag');
//# sourceMappingURL=Drag.js.map