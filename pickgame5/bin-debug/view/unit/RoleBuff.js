var RoleBuff = (function (_super) {
    __extends(RoleBuff, _super);
    function RoleBuff() {
        _super.call(this);
        this.buffBmp = new BitmapDisplay();
        this.buffBmp.setBitmapByName("mist");
        this.y = 50;
    }
    var d = __define,c=RoleBuff,p=c.prototype;
    p.setState = function (state) {
        switch (state) {
            case 0:
                if (this.contains(this.buffBmp)) {
                    this.removeChild(this.buffBmp);
                }
                break;
            case 1:
                this.addChild(this.buffBmp);
                break;
        }
    };
    return RoleBuff;
}(egret.DisplayObjectContainer));
egret.registerClass(RoleBuff,'RoleBuff');
//# sourceMappingURL=RoleBuff.js.map