var DataEvent = (function (_super) {
    __extends(DataEvent, _super);
    function DataEvent() {
        _super.apply(this, arguments);
        this.is_bingo = false;
        this.awardID = 0;
    }
    var d = __define,c=DataEvent,p=c.prototype;
    DataEvent.GAMEOVER = "gameover";
    DataEvent.RETRYGAME = "retrygame";
    DataEvent.IS_RESULT = "is_result";
    DataEvent.DATACOMPLETE = "datacomplete";
    DataEvent.DATACOMPLETE1 = "datacomplete1";
    DataEvent.DATACOMPLETE2 = "datacomplete1";
    DataEvent.DATAONFAIL = "dataonfail";
    DataEvent.DATAONFAIL1 = "dataonfail1";
    DataEvent.DATAONFAIL2 = "dataonfail1";
    DataEvent.REMOVEAWARD = "removeaward";
    DataEvent.REMOVEAWARD1 = "removeaward1";
    return DataEvent;
}(egret.Event));
egret.registerClass(DataEvent,'DataEvent');
//# sourceMappingURL=DataEvent.js.map