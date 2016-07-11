var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=DataEvent,p=c.prototype;
    DataEvent.STOP = "stop";
    DataEvent.GOTOS1 = "gotoS1";
    DataEvent.TIMESTOP = "timestop";
    DataEvent.TIMESTART = "timestart";
    DataEvent.TIMERESET = "timereset";
    DataEvent.SHOWTIME = "showtime";
    DataEvent.HIDETIME = "hidetime";
    DataEvent.RETRYTIME = "retrytime";
    DataEvent.GAMERETRY = "gameretry";
    DataEvent.GAMERETRY1 = "gameretry1";
    DataEvent.LOADCOMP = "loadcomp";
    DataEvent.LOADFAIL = "loadfail";
    return DataEvent;
}(egret.Event));
egret.registerClass(DataEvent,'DataEvent');
//# sourceMappingURL=DataEvent.js.map