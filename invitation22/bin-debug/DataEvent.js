var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __define = this.__define || function (o, p, g, s) {   Object.defineProperty(o, p, { configurable:true, enumerable:true, get:g,set:s }) };
var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=DataEvent;p=c.prototype;
    DataEvent.loadcomp = "loadcomp";
    DataEvent.HEADIMGCOMP = "headimgComp";
    DataEvent.GOTOSCENE2 = "gotoScene2";
    DataEvent.GOTOS2 = "gotoS2";
    DataEvent.REMOVESCENE1 = "removeScene1";
    DataEvent.REMOVESHOWSCENE = "removeShowScene";
    DataEvent.RETRY = "retry";
    DataEvent.LOADRETRY = "loadretry";
    return DataEvent;
})(egret.Event);
egret.registerClass(DataEvent,"DataEvent");
//# sourceMappingURL=DataEvent.js.map