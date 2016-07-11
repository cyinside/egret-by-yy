/**
 * Created by cyy on 15/10/21.
 */
var LocaionInfo = (function () {
    function LocaionInfo(obj) {
        this.id = 0;
        this.x = 0;
        this.y1 = 0;
        this.y2 = 0;
        this.type = 0;
        this.id = parseInt(obj["id"]);
        this.x = parseInt(obj["x"]);
        this.y1 = parseInt(obj["y1"]);
        this.y2 = parseInt(obj["y2"]);
        this.type = parseInt(obj["type"]);
    }
    var d = __define,c=LocaionInfo,p=c.prototype;
    return LocaionInfo;
}());
egret.registerClass(LocaionInfo,'LocaionInfo');
