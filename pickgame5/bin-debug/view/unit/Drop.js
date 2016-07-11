var Drop = (function (_super) {
    __extends(Drop, _super);
    function Drop(type) {
        if (type === void 0) { type = 0; }
        _super.call(this);
        this.speed = 5;
        this.markRemove = 0;
    }
    var d = __define,c=Drop,p=c.prototype;
    p.drawBorder = function () {
        var sp = new egret.Shape();
        var rect = this.bmp.getBounds();
        sp.graphics.lineStyle(3, 0xffffff);
        sp.graphics.drawRect(rect.x, rect.y, rect.width, rect.height);
        this.addChild(sp);
    };
    p.move = function () {
        this.speed += this.dropInfo.aspeed;
        if (this.speed >= this.dropInfo.maxSpeed) {
            this.speed = this.dropInfo.maxSpeed;
        }
        this.y += this.speed;
    };
    p.out = function () {
        if (this.y > this.parent.height) {
            return true;
        }
        return false;
    };
    return Drop;
}(egret.DisplayObjectContainer));
egret.registerClass(Drop,'Drop');
//# sourceMappingURL=Drop.js.map