var BlowUp = (function (_super) {
    __extends(BlowUp, _super);
    function BlowUp() {
        _super.call(this);
        this.state = 1;
        this.mc = new MovieClip("blow_up_json", "blow_up_png", "blow_up", "blow_up", false);
        this.mc.frameRate = 30;
        this.addChild(this.mc);
        this.mc.addEventListener(egret.Event.COMPLETE, this.completeHandler, this);
    }
    var d = __define,c=BlowUp,p=c.prototype;
    p.update = function () {
        this.mc.update();
    };
    p.completeHandler = function (e) {
        this.state = 2;
        this.mc.removeEventListener(egret.Event.COMPLETE, this.completeHandler, this);
    };
    return BlowUp;
}(egret.DisplayObjectContainer));
egret.registerClass(BlowUp,'BlowUp');
//# sourceMappingURL=BlowUp.js.map