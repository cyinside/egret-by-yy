var DropInfo = (function () {
    function DropInfo(obj) {
        this.type = parseInt(obj["type"]);
        this.aspeed = parseInt(obj["aspeed"]);
        this.maxSpeed = parseInt(obj["maxSpeed"]);
    }
    var d = __define,c=DropInfo,p=c.prototype;
    DropInfo.COIN = 1;
    DropInfo.PM25 = 2;
    DropInfo.BOMB = 3;
    DropInfo.DROP_STYLE_SINGLE = 1;
    DropInfo.DROP_STYLE_TWO_FLANKS = 2;
    DropInfo.DROP_STYLE_MIDDLE = 3;
    DropInfo.DROP_STYLE_LEFT = 4;
    DropInfo.DROP_STYLE_RIGHT = 5;
    return DropInfo;
}());
egret.registerClass(DropInfo,'DropInfo');
//# sourceMappingURL=DropInfo.js.map