var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=DataEvent,p=c.prototype;
    DataEvent.loadcomp = "loadcomp";
    DataEvent.HEADIMGCOMP = "headimgComp";
    DataEvent.GOTOSCENE2 = "gotoScene2";
    DataEvent.GOTOSCENE3 = "gotoScene3";
    DataEvent.GOTOSCENE1 = "gotoScene1";
    DataEvent.LOADRETRY = "loadretry";
    return DataEvent;
}(egret.Event));
egret.registerClass(DataEvent,'DataEvent');
//# sourceMappingURL=DataEvent.js.map