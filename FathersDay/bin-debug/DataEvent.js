var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=DataEvent,p=c.prototype;
    DataEvent.GOTO_SCENE = "gotoScene";
    DataEvent.DATACOMPLETE = "datacomplete";
    DataEvent.DATAONFAIL = "dataonfail";
    DataEvent.INPUTFAIL = "inputfail";
    return DataEvent;
}(egret.Event));
egret.registerClass(DataEvent,'DataEvent');
//# sourceMappingURL=DataEvent.js.map