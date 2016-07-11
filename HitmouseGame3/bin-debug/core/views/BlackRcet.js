/**
 * Created by cyy on 16/5/20.
 */
var BlackRcet = (function (_super) {
    __extends(BlackRcet, _super);
    function BlackRcet() {
        _super.call(this);
        this.createScnen();
    }
    var d = __define,c=BlackRcet,p=c.prototype;
    p.createScnen = function () {
        this.width = 640;
        this.height = 1030;
        this.rect = new egret.Shape;
        this.rect.graphics.beginFill(0x000000, 0.6);
        this.rect.graphics.drawRect(0, 0, this.width, this.height);
        this.rect.graphics.endFill();
        this.addChild(this.rect);
    };
    return BlackRcet;
}(DisplayScrollerScene));
egret.registerClass(BlackRcet,'BlackRcet');
//# sourceMappingURL=BlackRcet.js.map